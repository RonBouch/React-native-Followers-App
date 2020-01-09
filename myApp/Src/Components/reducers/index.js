import LoginReducer from './LoginReducer'
import counterReducer from './counterReducer'
import getPostReducer from './getPostReducer'
import {combineReducers} from 'redux';

const allReducers =combineReducers({
    LoginReducer,
    counterReducer,
    getPostReducer
});
export default allReducers;