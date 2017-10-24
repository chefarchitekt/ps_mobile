import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer';

export default combineReducers({
    userLogin: loginReducer
});
