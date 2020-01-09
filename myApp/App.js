import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import React, {Fragment} from 'react';
import {
  StyleSheet,
} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
import Home from './Src/Screens/Home';
import Login from './Src/Screens/Login';
import Register from './Src/Screens/Register';
import AddPost from './Src/Screens/AddPost'
import {Provider} from 'react-redux'
import store from './Src/Components/store'
import Follower from './Src/Screens/Followers'
// import {createStore} from 'redux';
class App extends React.Component{

  render(){
    return(
      <Provider store={store}>
       <AppContainer/>
      </Provider>
    );
  }
}

export default App;

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
 AddPost:{screen:AddPost},
 Follower:{screen:Follower},

  Register: { screen: Register },
  Home:{screen:Home},


}); 
const AppContainer = createAppContainer(AppSwitchNavigator);

