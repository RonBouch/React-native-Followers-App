import React, { Component } from 'react'
import {View,Text,AsyncStorage,TouchableOpacity ,Image,TextInput} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import {addPost} from '../Components/actions'
import { bindActionCreators } from 'redux';
import styles from '../Components/StyleSheet'
class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            avatarSource:"",
            imgData:"",
            title:"",
            message:""
        }
    }
  
   async  UploadImg(){
        let options = {
            quality: 1.0,
            maxWidth: 400,
            maxHeight: 400,
            storageOptions: {
              skipBackup: true
            }
          };
        ImagePicker.showImagePicker(options,(response) => {
           
            if (response.didCancel) {
            } else if (response.error) {            
            } else {
              const source = { uri: response.uri };
               const imgData ="data:"+response.type+";base64,"+response.data
               this.setState({
                imgData:imgData,
                 avatarSource: source,
               })
            }
          });
     }
     isValid(){
      if (this.state.title == "") {
        this.setState({ message: "* אנא הכנס כתובת משפט" });
        return false;
      } else if (this.state.imgData == "") {
        this.setState({ message: "* אנא הכנס תמונה" });
        return false ;
      }
      return true; 
     }
    async HandleSubmit(){
      if(this.isValid()){
           const data={
            title:this.state.title,
            image_url:this.state.imgData
           }
          await this.props.addPost(this.props.user.data.token,data)
          }
     }
    render() {
        return (
            <View style={{width:'100%',
        }}>
              
                <View>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate("Home")}>
                  <Icon
                      name="arrow-left"
                      type="font-awesome"
                      size={22}
                      color="black"
                      raised
                    />
                  </TouchableOpacity>
                </View>
              <View style={{alignItems:'center'}}>
              <View style={styles.input}>
         <TextInput
           placeholder="title"
           placeholderTextColor="grey"
           onChangeText={(e)=>this.setState({title:e})}
           style={styles.txtInput}
         />
       </View>

                <TouchableOpacity onPress={()=>this.UploadImg()}>
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
           <Text style={styles.textMessage}>{this.state.message}</Text>

                <TouchableOpacity style={styles.loginButton} onPress={()=>this.HandleSubmit()} >
          <Text style={styles.btnTxt}>
            UpLoad Image{"  "}
          </Text>
          <Icon name="hand-pointer-o"  type="font-awesome" color="white" size={20} />
        </TouchableOpacity>
              </View>
      
            </View>
        )
    }
}
function mapStateToProps(state){
    return {
      user:state.LoginReducer.user,
      post:state.addPostReducer
    }
}
function mapDispatchToProps(dispatch){
    return {
      addPost:bindActionCreators(addPost,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddPost);
 