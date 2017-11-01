import { combineReducers } from 'redux';
//import navReducer from './navReducer';
import loginReducer from './auth/loginReducer';
import contactReducer from './contact/contactReducer';

export default combineReducers({
    //appNavigation: navReducer,
    userLogin: loginReducer,
    userContacts: contactReducer
});
