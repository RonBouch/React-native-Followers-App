import React, { Component } from 'react'
import {View,Text,AsyncStorage,TouchableOpacity ,Image,TextInput} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../Components/StyleSheet'
export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            avatarSource:"",
            token:"",
        }
    }
    
   async componentDidMount(){
     
      await this.retriveData();
    }
    retriveData = async () => {
        let u = await AsyncStorage.getItem("token");
        u=JSON.parse(u);
        this.setState({
            token:u.data.token
        })
        console.log("token - > ",u.data.token)

        if (u != null) {
            

        }
      };
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
                                //   this.GetMyPost(token)
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
        console.log("State uri ",this.state.avatarSource)
        return (
            <View style={{alignItems:'center',width:'100%',backgroundColor: "rgba(208, 222, 9,.9)",zIndex:1,
        }}>
                <Text>
                    AddPost
                </Text>
                <View style={styles.input}>
         <TextInput
           placeholder="title"
           placeholderTextColor="rgba(255,255,255,.9)"
           // onChangeText={this.changeEmail}
           style={styles.txtInput}
         />
       </View>

                <TouchableOpacity onPress={()=>this.UploadImg(this.state.token)}>
                {this.state.avatarSource != "" ? (
                  <Image style={styles.profileImage}
                    source={this.state.avatarSource}
                  />
                ) : (
                  <Image
                    style={styles.profileImage}
                    source={require('../images/camera.png')}
                  />
                )}
                </TouchableOpacity>

            </View>
        )
    }
}
