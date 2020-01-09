import React, { Component } from 'react'
import {View,Text,TouchableOpacity ,Image,SafeAreaView,FlatList} from 'react-native'
import styles from '../Components/StyleSheet'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
// import {} from '../Components/actions'
import { ScrollView } from 'react-native-gesture-handler';
function Item({follower}) 
{
  return(
    <View style={{margin:4}}>
      <Text style={{color:'blue',fontSize:16}}>{follower.email}</Text>
    </View>
  )
}
 class Followers extends Component {
   constructor(props) {
     super(props);
     
   }

   
    render() {
    
        return (
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
                 <View>
                 <Text style={{fontSize:20 ,color:'#9400d3',fontWeight: "bold",margin:10}}>Following:</Text>
                 {
                this.props.followers.followers.data.length!=0?
                 <SafeAreaView>
                 <FlatList
                data={this.props.followers.followers.data}
                renderItem={({ item }) => <Item follower={item} />}
                keyExtractor={item =>item.email}
              />
              </SafeAreaView>
              :
              <Text> No - Followers</Text>
                 }
                 </View>
                 <View>
                 <Text style={{fontSize:20 ,color:'#9400d3',fontWeight: "bold",margin:10}}>Followers</Text>
              {
                this.props.myFollowers.followers.data.length!=0?
                <SafeAreaView>
                <FlatList
               data={this.props.myFollowers.followers.data}
               renderItem={({ item }) => <Item follower={item} />}
               keyExtractor={item =>item.email}
             />
             </SafeAreaView>
                :
                <Text> No - Followers</Text>
              }
              
                 </View>
            </View>
        )
    }
}
function mapStateToProps(state){
    return {
      user:state.LoginReducer.user,
      followers:state.getFollowersByIDReducer,
      myFollowers:state.getMyFollowersReducer,    
    }
}
function mapDispatchToProps(dispatch){
    return {


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Followers);
