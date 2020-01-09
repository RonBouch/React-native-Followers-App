import React, { Component } from 'react'
import {View,Text,TouchableOpacity,alert } from 'react-native'
export default class Register extends Component {

    register = () => {
          const data = {
            email: "asssss@yopmail.com",
            password: "123456a"
          };
          console.log(JSON.stringify(data))
          fetch('https://moonsite-rn-follow-test.herokuapp.com/api/usr/register/', {
           method: 'POST',
           headers: {
           Accept: 'application/json',
          'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
            })
            .then(res => {
              return res.json();
            })
            .then(
              result => {
                console.log("fetch POST= ", result);
                // let u = JSON.parse(result.d);
    
                // if (u == null) {
                //   console.log("register faild")
    
                //   return;
                // } else {
                //     console.log("Register sucsses" , u );
                // }
              },
              error => {
                console.log("err post=", error);
              }
            );
          
      };
    render() {
        return (
            <View style={{alignItems:'center',display:'flex',height:'100%'}}>
                <Text>
                    hi register
                </Text> 
                <TouchableOpacity style={{borderWidth:1}} onPress={()=>this.register()}>
                <Text> Register Now </Text>  
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")}>
                    <Text>
                        To-Login 
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
