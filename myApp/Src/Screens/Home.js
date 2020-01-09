import React, { Component } from 'react'
import {View,Text,TouchableOpacity ,Image} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import styles from '../Components/StyleSheet'
import AddPost from '../Components/AddPost'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { bindActionCreators } from 'redux';
import {getPosts} from '../Components/actions'
 class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            avatarSource:"",
            token:"",
            addPost:false,
        }
    }
    
    componentDidMount(){
     this.getData();
    }
    getData = async () => {
      try {
        const value =JSON.parse( await AsyncStorage.getItem("user"))
        if(value !== null) {
        //   this.setState({
        //     token:value.data.token
        // })
        this.props.getPosts(value.data.token)
        console.log("token - > ",value.data.token)

         }

      } catch(e) {
        console.log("err async ",e)
      }
    }

    GetPosts = (token) => {
            fetch('https://moonsite-rn-follow-test.herokuapp.com/api/post/get-all-posts', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                'Authorization': token
                 },
                 })
                 .then((response) => response.json())
                 .then(json => {
                        if (json!=null) {
                          
                          console.log("all posts - >  ",json )
                       
                        } else {
                            console.log("false")
                        }
                      })
                     .catch(error => {
                        console.error(error);
                      });
     }
     GetMyPost = (token) => {
         console.log("Token get my post - ",token)
        fetch('https://moonsite-rn-follow-test.herokuapp.com/api/post/get-posts-by-user-id', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            'Authorization': token
             },
             })
             .then((response) => response.json())
             .then(json => {
                    if (json!=null) {
                      
                      console.log("all my post - >  ",json )
                   
                    } else {
                        console.log("false")
                    }
                  })
                 .catch(error => {
                    console.error(error);
                  });
 }
    AddPost = async(token,dataImg) => {
                        const data = {
                                title: "Ron-Post",
                                image_url: dataImg
                        };
                        fetch('https://moonsite-rn-follow-test.herokuapp.com/api/post/add-post', {
                         method: 'POST',
                         headers: {
                         Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': token

                         },
                         body: JSON.stringify(data),
                          })
                          .then(res => {
                            return res.json();
                          })
                          .then(
                            result => {
                            //   console.log("fetch POST= ", result);
                              if (result.res != true) {
                                console.log("faild post")
                  
                                return;
                              } else {                
                                  console.log("Add Post - >  " , result );
                                  this.GetMyPost(token)
                              }
                            },
                            error => {
                              console.log("err post=", error);
                            }
                          );
                        
     };
   async  UploadImg(token){
         console.log("token from upload ", token)
        let options = {
            quality: 1.0,
            maxWidth: 400,
            maxHeight: 400,
            storageOptions: {
              skipBackup: true
            }
          };
        ImagePicker.showImagePicker(options,(response) => {
            // console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            
            } else {
              const source = { uri: response.uri };
            //   console.log('res img: ', response.uri);
               const data ="data:"+response.type+";base64,"+response.data
               this.AddPost(token,data)
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
           
              this.setState({
                avatarSource: source,
              });
            }
          });
     }
     
    render() {
        // console.log("props  ",this.props)
        return (
            <View style={{alignItems:'center',flex:1}}>
                <Text>
                    hi home
                </Text>
               {this.state.addPost?
               <View>
               <TouchableOpacity style={{backgroundColor:'red'}} 
                onPress={() => this.setState({ addPost: false })}>
                   <Text>
                       X
                   </Text>
               </TouchableOpacity>
               <AddPost/>
               </View>
               :console.log("..")}
               <TouchableOpacity
            onPress={() => this.setState({ addPost: true })}
            style={styles.reminderTouch} >
            <Image
              source={require("../images/add-reminder.png")}
              style={styles.reminderImg}
            />
          </TouchableOpacity>
            </View>
        )
    }
}
function mapStateToProps(state){
  console.log("map ",state)
    return {
      user:state.LoginReducer.user,
      posts:state.getPostReducer
    }
}
function mapDispatchToProps(dispatch){
    return {
      getPosts:bindActionCreators(getPosts,dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);