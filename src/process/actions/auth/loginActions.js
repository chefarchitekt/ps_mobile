import {
    LOGIN_USER_PROGRESS, 
    LOGIN_USER_SUCCESS, 
    LOGIN_INPUT,
    SET_CURRENT_USER,
    USER_SIGN_OUT
} from '../../../process/types/appTypes';

import {
    CLIENT_LOGIC_ERRORS, 
    SERVER_LOGIC_ERRORS,
    HTTP_ERRORS
} from '../../../process/types/commonTypes';

import setAuthorizationToken from '../../../services/httpServices';
import { 
    getCredentialData, 
    //getProfileData, 
    saveCredentialData, 
    saveProfileData, 
    removeCredentialData, 
    removeProfileData 
} from '../../../services/storageServices';

export const loginUserInput = ({ prop, value }) => {
    return ({ //no need for dispatch as it is not asynch
        type: LOGIN_INPUT,
        payload: {
            prop,
            value
        }
    });
};

export const loginInputError = (errors) => {
    return ({
        type: CLIENT_LOGIC_ERRORS, 
        payload: errors
    });
};

export const userReloginRequest = () => {
    getCredentialData()
        .then((storedCredentials) => {
            userLoginRequest(storedCredentials);
        })
        .catch(error => {
            const errorMsg = 'AsyncStorage Error: ' + error.message;
            console.log(errorMsg);
        }); 
};

export const userLoginRequest = (formLoginData) => {
    const encodedLoginData = Object.keys(formLoginData)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formLoginData[key]))
        .join('&');
    /*
        console.log('action: loginData');
        console.log(formLoginData);
        console.log('action: formBody');
        console.log(formBody);
    */
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_PROGRESS });
        accountLoginAsync(dispatch, encodedLoginData, formLoginData);
    };
};


const accountLoginAsync = (dispatch, encodedLoginData, formLoginData) => {
    console.log('action: encodedLoginData');
    console.log(encodedLoginData);
    fetch('http://phonespeakapi.ddns.me/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedLoginData
      })
      .then((response) => response.json())
      .then((responseJson) => {
            console.log('action: responseData');
            console.log(responseJson);
            loginUserSuccess(dispatch, formLoginData, responseJson);
            setCurrentUser(dispatch, formLoginData, responseJson.Record);
        })
      .catch((error) => {
            console.log(JSON.stringify(error.response.data));
            httpErrorDetail(dispatch, error.response);
            loginUserFailed(dispatch, error.response.data);
        });
  };

  const loginUserSuccess = (dispatch, formLoginData, responseData) => {
    dispatch({
         type: LOGIN_USER_SUCCESS,
         payload: responseData
     });
 };
 
 const loginUserFailed = (dispatch, errorData) => {
     dispatch({
         type: SERVER_LOGIC_ERRORS,
         payload: errorData
     });
 };
 
 const httpErrorDetail = (dispatch, errorDetail) => {
     dispatch({
         type: HTTP_ERRORS,
         payload: errorDetail
     });
 };


 const setCurrentUser = (dispatch, formLoginData, userData) => {
    console.log('setCurrentUser: formLoginData');
    console.log(formLoginData);
    console.log('setCurrentUser: userToken');
    console.log(userData.AccessToken);
     setAuthorizationToken(user.AccessToken);

     const authenticatedCredential = { ...formLoginData, isAuthenticated: true };
     const jsonCredentialData = JSON.stringify(authenticatedCredential);
     
     console.log('JSON_AUTHENTICATED_CREDENTIALS');
     console.log(jsonCredentialData);
     
     saveCredentialData(jsonCredentialData);

     const jsonUserData = JSON.stringify(userData);
     console.log('JSON_USER_DATA');
     console.log(jsonCredentialData);

     saveProfileData(jsonUserData);

     dispatch({
        type: SET_CURRENT_USER,
        payload: userData
    });
  };
  
  export const userLogoutRequest = () => {
    return dispatch => {
      removeCredentialData();
      removeProfileData();
      setAuthorizationToken(false);
      dispatch({
          type: USER_SIGN_OUT
      });
    };
  };
