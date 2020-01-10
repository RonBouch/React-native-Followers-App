import {createAppContainer} from 'react-navigation'
import React, {Fragment} from 'react';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
import {Provider} from 'react-redux'
import store from './Src/Components/store'
import AppSwitchNavigator from './Src/Routes/AppSwitchNavigator'
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
const AppContainer = createAppContainer(AppSwitchNavigator);

