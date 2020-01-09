import React, { Component } from 'react'
import {View,Text,TouchableOpacity,TextInput } from 'react-native'
import styles from '../Components/StyleSheet'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import {login} from '../Components/actions'
import AsyncStorage from '@react-native-community/async-storage';
import { bindActionCreators } from 'redux';

  class Login extends Component {
  

   
    // login = async() => {
    //     const data = {
    //       email: "asssss@yopmail.com",
    //       password: "123456a"
    //     };
    //     console.log(JSON.stringify(data))
    //     fetch('https://moonsite-rn-follow-test.herokuapp.com/api/usr/login/', {
    //      method: 'POST',
    //      headers: {
    //      Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //      },
    //      body: JSON.stringify(data),
    //       })
    //       .then(res => {
    //         return res.json();
    //       })
    //       .then(
    //         result => {
    //           console.log("fetch POST= ", result);

              
  
    //           if (result.res != true) {
    //             console.log("register faild")
  
    //             return;
    //           } else {
    //             // console.log("result - -- ",result.data)

    //              this.storeData("token", result);
    //               this.props.navigation.navigate('Home')
    //             //   console.log("Register " , result.data.token );
    //           }
    //         },
    //         error => {
    //           console.log("err post=", error);
    //         }
    //       );
        
    // };
    storeData = async (key, value) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        this.props.navigation.navigate("Home")
      } catch (e) {
        // saving error
      }
    }
    
      FetchUser= async()=>{
        const data = {
          email: "asssss@yopmail.com",
          password: "123456a"
        };
        await this.props.login(data)
      console.log("fetch user -",this.props.user)
      }
    render() {
      console.log("fetch user -",this.props.user)
        if(this.props.user!=null){
          this.storeData("user",this.props.user);
        }
        return (
        <View style={styles.loginView}>
        <Text>
            Login
        </Text>
        <View style={styles.input}>
         
          <TextInput
            keyboardType="email-address"
            placeholder="אימייל"
            placeholderTextColor="rgba(255,255,255,.7)"
            // onChangeText={this.changeEmail}
            style={styles.txtInput}
          />
           <Icon
            iconStyle={{
              marginEnd: "3%"
            }}
            name="envelope"
            type="font-awesome"
            color="white"
            size={18}
          />
        </View>

        <View style={styles.input}>
        
          <TextInput
            secureTextEntry={true}
            placeholder="סיסמא"
            maxLength={12}
            placeholderTextColor="rgba(255,255,255,.7)"
            // onChangeText={this.changePass}
            style={styles.txtInput}
          />
            <Icon
            iconStyle={{ marginEnd: "3%" }}
            name="lock"
            type="font-awesome"
            color="white"
            size={22}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={()=>this.FetchUser()}>
          <Text style={styles.btnTxt}>
            התחבר{"  "}
          </Text>
          <Icon name="hand-pointer-o"  type="font-awesome" color="white" size={20} />
        </TouchableOpacity>

        {/* <Text style={styles.textMessage}>{this.state.message}</Text> */}

                <TouchableOpacity style={{marginTop:30,borderWidth:1}} onPress={()=>this.props.navigation.navigate("Register")}>
                    <Text>
                        To-register 
                    </Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={()=>this.props.plus()}>
                    <Text style={{fontSize:26}}>+</Text>
                </TouchableOpacity>
                <Text style={{fontSize:26}}>{this.props.counter}</Text>
      <Text>    {this.props.user!=null?this.props.user.data.token:0}</Text>
            </View>
        )
    }
}

function mapStateToProps(state){
  console.log("map ",state)
    return {
      user:state.LoginReducer.user,
    counter:state.counterReducer.counter
    }
}
function mapDispatchToProps(dispatch){
    return {
      plus:()=>dispatch({type:'PLUS'}),
      login:bindActionCreators(login,dispatch)

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);