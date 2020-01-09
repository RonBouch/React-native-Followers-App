import React, { Component } from 'react'
import {View,Text,TouchableOpacity,TextInput } from 'react-native'
import styles from '../Components/StyleSheet'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import {login} from '../Components/actions'
import AsyncStorage from '@react-native-community/async-storage';
import { bindActionCreators } from 'redux';

  class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:"",
      message:"",
    }
  }
  
    storeData = async (key, value) => {
      try {
        console.log("value ",value)
        await AsyncStorage.setItem(key, JSON.stringify(value));
        this.props.navigation.navigate("Home")
      } catch (e) {
        // saving error
      }
    }
    isValid(){
      if (this.state.email == "") {
        this.setState({ message: "* אנא הכנס כתובת מייל" });
        return false;
      } 
      if (this.state.email != "") {
        let pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (!pattern.test(this.state.email)) {
          this.setState({ message: "* כתובת אימייל לא תקינה" });
          return false;
        }
      }
      if (this.state.password == "") {
        this.setState({ message: "* אנא הכנס סיסמה" });
        return false ;
      }
      if (this.state.password != "") {
        let pattern = /^.{4,8}$/;
        if (!pattern.test(this.state.password)) {
          this.setState({ message: "*סיסמה בין 4-8מספרים או אותיות" }); 
          return false;
        }
      }
      this.setState({message:""})
      return true; 
     }
      FetchUser= async()=>{
        if(this.isValid()){

        const data = {
          email: "asssss@yopmail.com",
          password: "123456a"
        };
        // const data = {
        //   email: this.state.email,
        //   password: this.state.password
        // };
        await this.props.login(data)
      }
      }
    render() {
        if(this.props.user!=null){
          if(this.props.user.res){
          this.storeData("user",this.props.user);
          }   
        }
        return (
        <View style={styles.loginView}>
        <Text style={{fontSize:20 ,color:'#9400d3',fontWeight: "bold",margin:10}}>
            Login
        </Text>
        <View style={styles.input}>
         
          <TextInput
            keyboardType="email-address"
            placeholder="Email-address"
            placeholderTextColor="grey"
            onChangeText={(e)=>this.setState({email:e})}
            style={styles.txtInput}
          />
           <Icon
            iconStyle={{
              marginEnd: "3%"
            }}
            name="envelope"
            type="font-awesome"
            color="grey"
            size={18}
          />
        </View>

        <View style={styles.input}>
        
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            maxLength={12}
            placeholderTextColor="grey"
            onChangeText={(e)=>this.setState({password:e})}
            style={styles.txtInput}
          />
            <Icon
            iconStyle={{ marginEnd: "3%" }}
            name="lock"
            type="font-awesome"
            color="grey"
            size={22}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={()=>this.FetchUser()}>
          <Text style={styles.btnTxt}>
            Login{"  "}
          </Text>
          <Icon name="hand-pointer-o"  type="font-awesome" color="white" size={20} />
        </TouchableOpacity>

        {
          this.state.message!=""?
          <Text style={styles.textMessage}>{this.state.message}</Text>
          :
          <Text style={styles.textMessage}>{this.props.user!=null&&!this.props.user.res?this.props.user.msg:""}</Text>
        }
                <TouchableOpacity style={{marginTop:30,borderWidth:1}} onPress={()=>this.props.navigation.navigate("Register")}>
                    <Text>
                        To-Register 
                    </Text>
                </TouchableOpacity>
            
             
            </View>
        )
    }
}

function mapStateToProps(state){
  console.log("map ",state)
    return {
      user:state.LoginReducer.user,
    }
}
function mapDispatchToProps(dispatch){
    return {
      login:bindActionCreators(login,dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);