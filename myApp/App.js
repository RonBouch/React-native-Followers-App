import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import React, {Fragment} from 'react';
import {
  StyleSheet,
} from 'react-native';

import Home from './Src/Screens/Home';
class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}
export default App;

const AppSwitchNavigator = createSwitchNavigator({
  Home:{screen:Home},


}); 
const AppContainer = createAppContainer(AppSwitchNavigator);

