import { combineReducers } from 'redux';
//import navReducer from './navReducer';
import loginReducer from './auth/loginReducer';

export default combineReducers({
    //appNavigation: navReducer,
    userLogin: loginReducer
});
