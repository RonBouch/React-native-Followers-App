import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

import {View,Text,TouchableOpacity ,Image} from 'react-native'
import styles from '../Components/StyleSheet'
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {getPosts,deletePost,addFollower} from '../Components/actions'
import { ScrollView } from 'react-native-gesture-handler';
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
        this.props.getPosts(value.data.token)

         }

      } catch(e) {
      }
    }
     
    render() {
      let Posts=[];
      if(this.props.posts.fetched){
      Posts = this.props.posts.posts.data.map((post, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.contributionView}
            >
              <View  style={styles.heartIconStyle}>
              {post.user_id==this.props.user.data.user_id ? (
                <TouchableOpacity onPress={() => this.props.deletePost(post.post_id,this.props.user.data.token)}>
                 
                    <Icon
                      name="trash"
                      type="font-awesome"
                      size={22}
                      color="red"
                      raised
                    />
                   
                </TouchableOpacity>
                  ):
                  <TouchableOpacity onPress={()=>this.props.addFollower(this.props.user.data.token,(post.user_id))}>
                    {this.props.followers.followers!=null?this.props.followers.followers.data.filter(
                    data => data.f_user_id == post.user_id
                  ) != "" ? (
                    <Icon
                      name="user-plus"
                      type="font-awesome"
                      size={20}
                      color="red"
                      raised
                    />
                  ) : (
                    <Icon
                      name="user-plus"
                      type="feather"
                      size={20}
                      color="black"
                      raised
                    />
                  ):console.log("")}
                   
                  </TouchableOpacity>}

              </View>
              <View style={styles.viewImageStyle}>
                <Image
                  source={{uri:post.image_url}}
                  style={styles.imageStyle}
                />
              </View>
              <View  style={styles.viewDetails}>
              <View style={styles.viewTitle} >
              <Text style={styles.txtTitle}>{post.title}</Text>
                </View>
               
              </View>
            </TouchableOpacity>
          );

      });
      }
        return (
            <View style={{alignItems:'center',flex:1}}>
             <View style={{flexDirection:'row',justifyContent: "space-around",width:'100%',borderWidth: 3,padding:4}}>
              <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{this.props.navigation.navigate("AddPost")}}>
              <Icon
                      name="plus"
                      type="feather"
                      size={22}
                      color="black"
                      raised
                    />
                    <Text>
                    Add Post
                </Text>
              </TouchableOpacity>
              
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.props.navigation.navigate("Follower")}>
              <Text>Following</Text>
              <Text>{this.props.followers.fetched?this.props.followers.followers.data.length:0}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}}  onPress={()=>this.props.navigation.navigate("Follower")}>
              <Text>Followers</Text>
              <Text>{this.props.myFollowers.fetched?this.props.myFollowers.followers.data.length:0}</Text>
            </TouchableOpacity>
            </View>
                <ScrollView>
                {Posts}

                </ScrollView>
         
            </View>
        )
    }
}
function mapStateToProps(state){
    return {
      user:state.LoginReducer.user,
      posts:state.getPostReducer,
      delete:state.deletePostReducer,
      follower:state.addFollowerReducer,
      followers:state.getFollowersByIDReducer,
      myFollowers:state.getMyFollowersReducer,

    }
}
function mapDispatchToProps(dispatch){
    return {
      getPosts:bindActionCreators(getPosts,dispatch),
      deletePost:bindActionCreators(deletePost,dispatch),
      addFollower:bindActionCreators(addFollower,dispatch)
    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
