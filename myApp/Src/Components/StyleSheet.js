import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //All Screen 
  headlineText:{
    fontSize:20 ,
    color:'#9400d3',
    fontWeight: "bold",
    margin:10},
    container:{
      alignItems: "center",
      height:'100%',
    },
    input: {
      flexDirection: "row",
      width: 180,
      height: 40,
      alignItems: "center",
      borderColor: "black",
      borderBottomWidth: 1,
      marginTop: 10
    },
    txtInput:{
      width:"100%",
      color:'black'
      },
      btnSumbit: {
        flexDirection: "row",
        elevation: 10,
        backgroundColor: "rgba(67, 204, 29,.9)",
        borderRadius: 20,
        height: 35,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 1,
        marginTop: 50
      },
      btnTxt:{
        fontWeight: "bold",
         color: "white",
          fontSize: 18
      },
      textMessage: {
        margin: 10,
        color: "red",
        textAlign: "center"
      },
      btnLoginRegister:{
        marginTop:30,
        borderWidth:1,
        borderRadius:20,
        padding:4
      },

  // Dashboard Screen
  postView:{
    backgroundColor: "white",
    width: "95%",
    height: 210,
    margin: 10,
    borderWidth: 1,
    borderColor: "#e6e6fa",
    elevation: 10
   },
   viewIconStyle:{
    position: "absolute",
    zIndex: 1,
    margin: 5,
    left: 2
   },
   viewImageStyle:{
    height: "70%"
   },
   imageStyle:{
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100
   },
   viewTitle:{
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15
   },
   txtTitle:{
    fontSize: 20, 
    color: "black"
   },
   headerView:{
     flexDirection:'row',
     justifyContent: "space-around",
     width:'100%',
     borderWidth: 3,
     padding:4
   },
   headerColumnView:{
     alignItems:'center',
   },

  //Add Post Screen 
  postImg:{
    height: 200,
    width: 200,
    borderRadius: 20,
    marginTop:20,
    padding:3
  },
 
  //Follower Screen
  followersTxt:{
    color:'blue',
    fontSize:16
  },
  followersView:{
    margin:4
  },
});