import {createSwitchNavigator} from 'react-navigation'
import Dashboard from '../Screens/Dashboard';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import AddPost from '../Screens/AddPost'
import Follower from '../Screens/Followers'

const AppSwitchNavigator = createSwitchNavigator({
    Login: { screen: Login },
   AddPost:{screen:AddPost},
   Follower:{screen:Follower},
    Register: { screen: Register },
    Dashboard:{screen:Dashboard},
  
  
  }); 
  export default AppSwitchNavigator