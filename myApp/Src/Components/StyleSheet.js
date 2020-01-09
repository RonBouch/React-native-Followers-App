import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    height: 150,
    width: 150,
    borderRadius: 100,
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
    borderColor: "white",
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
    backgroundColor:'blue',
    height:'100%',
  },
  txtInput:{
  width:"100%",
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