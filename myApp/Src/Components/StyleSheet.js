import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //Cotnribution and Favorite and profilePost
  contributionView:{
    backgroundColor: "white",
    width: "95%",
    height: 210,
    margin: 10,
    borderWidth: 1,
    borderColor: "#e6e6fa",
    elevation: 10
   },
   heartIconStyle:{
    position: "absolute",
    zIndex: 1,
    margin: 5,
    left: 2
   },
   imageStyle:{
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100
   },
   viewImageStyle:{
    height: "70%"
   },
   viewDetails:{
    justifyContent: "space-around",
    flexDirection: "row-reverse",
    height: "30%",
    marginTop: 15
   },
   viewTitle:{
    flexDirection: "column",
    alignItems: "center"
   },
   txtTitle:{
    fontSize: 20, 
    color: "gray"
   },
   txtDetails:{
    color: "#6495ed",
    fontSize: 16
   },
   viewItems:{
    flex: 1, 
    alignItems: "center"
   },
   viewNoItems:{
    flex: 1,
     alignItems: "center",
    justifyContent: "center"
  },
/// posts
LoginRegisterSelected: {
    margin: 20,
    color: "rgb(196, 58, 37)",
    fontWeight: "bold",
    fontSize: 26,
    fontFamily: "serif",
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1
  },
  LoginRegisterNotSelected: {
    margin: 20,
    color: "rgba(255,255,255,.9)",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "serif",
    textShadowColor: "gray",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 5
  },
  profileImage:{
    height: 200,
    width: 200,
    borderRadius: 20,
    marginTop:20,
    padding:3
  },
  form: {
    alignItems: "center",
    textAlign: "center",
    width: "90%",
    height: "85%",
    margin: 75
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
  loginButton: {
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
  textMessage: {
    margin: 10,
    color: "red",
    textAlign: "center"
  },

  faceBookButton: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,255,.9)",
    height: 45,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderColor: "white",
    borderWidth: 2
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 45,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderColor: "white",
    borderWidth: 2
  },
  buttonText: {
    color: "white"
  },

  //Register Page Style
  radioGender: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "center"
  },
  registerButton: {
    flexDirection: "row",
    elevation: 10,
    backgroundColor: "rgba(208, 222, 9,.9)",
    borderRadius: 20,
    height: 35,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 10
  },
  reminderTouch:{
    position: "absolute",
    bottom: 10,
    padding: 5,
    right: "5%",
    alignItems: "center",
    flexDirection: "row-reverse",
    backgroundColor: "white",
    borderRadius: 200
  },
  reminderImg:{
    width: 50, 
    height: 50,
   borderRadius: 200
  },
  loginView:{
    alignItems: "center",
    height:'100%',
  },
  txtInput:{
  width:"100%",
  color:'black'
  },
  btnTxt:{
    fontWeight: "bold",
     color: "white",
      fontSize: 18
  },
  googleImg:{
    height: 55,
     width: 55,
     marginTop: 8
  },
  facebookImg:{
    height: 70, 
    width: 70
  },
  spaceGoogleFace:{
    margin: 20
  },
});