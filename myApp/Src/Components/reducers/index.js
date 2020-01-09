import LoginReducer from './LoginReducer'
import getPostReducer from './getPostReducer'
import deletePostReducer from './deletePostReducer'
import addPostReducer from './addPostReducer'
import addFollowerReducer from './addFollowerReducer'
import getMyFollowersReducer from './getMyFollowersReducer'
import getFollowersByIDReducer from './getFollowersByIDReducer'
import registerReducer from './registerReducer'
import {combineReducers} from 'redux';

const allReducers =combineReducers({
    LoginReducer,
    getPostReducer,
    deletePostReducer,
    addPostReducer,
    addFollowerReducer,
    getFollowersByIDReducer,
    getMyFollowersReducer,
    registerReducer
});
export default allReducers;