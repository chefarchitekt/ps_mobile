
import { NavigationActions } from 'react-navigation';
import { navigationRef } from '../../../App';

import {
    LOGIN_USER_PROGRESS, 
    LOGIN_USER_SUCCESS, 
    USER_RELOGIN_PROGRESS,
    LOGIN_INPUT,
    SET_CURRENT_USER,
    USER_SIGN_OUT,
    STORED_CREDENTIAL_EXIST,
    STORED_CREDENTIAL_EMPTY,
    SET_TEAM_MEMBER_DETAIL
} from '../../../process/types/appTypes';

import {
    CLIENT_LOGIC_ERRORS, 
    SERVER_LOGIC_ERRORS,
    HTTP_ERRORS
} from '../../../process/types/commonTypes';

import { setAuthorizationToken } from '../../../services/httpServices';
import { 
    getCredentialData, 
    //getProfileData, 
    saveCredentialData, 
    saveProfileData, 
    removeCredentialData, 
    removeProfileData 
} from '../../../services/storage/storageProfileServices';

import {
    getKazooUserProfileStore,
    getKazooTeamContactsStore,
    getKazooTeamContactsDetailStore,
        
    removeKazooPersonalContactsStore,
    removeKazooTeamContactsDetailStore,
    removeKazooTeamContactsStore,
    removeKazooUserProfileStore,
} from '../../../services/storage/storageKazooContactServices';

import { 
    getActiveUser,
    getTeamMember,
    getTeamMemberDetail
} from '../contact/contactActions';


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

export const checkAuthenticationStatus = () => {
    return (dispatch) => {
        getCredentialData().then((jsonStoredCredentials) => {
            if (jsonStoredCredentials !== null) {
                const storedCredentials = (({ UserName, UserPassword, KazooAccountName }) => ({ 
                    UserName, 
                    UserPassword, 
                    KazooAccountName }))(JSON.parse(jsonStoredCredentials));
                dispatch({
                    type: STORED_CREDENTIAL_EXIST,
                    payload: { storedCredentials }
                });
            } else {
                dispatch({
                    type: STORED_CREDENTIAL_EMPTY
                });
            }
        })
        .catch(error => {
            const errorMsg = 'AsyncStorage Error: ' + error.message;
            console.log(errorMsg);
        }); 
    };
};

export const userReloginRequest = () => {
    console.log('RELOGIN STARTED');
    return (dispatch) => {
    getCredentialData()
        .then((jsonStoredCredentials) => {
            if (jsonStoredCredentials !== null) {
                const storedCredentials = (({ UserName, UserPassword, KazooAccountName }) => ({ UserName, UserPassword, KazooAccountName }))(JSON.parse(jsonStoredCredentials));
                console.log('RELOGIN storedCredential');
                console.log(storedCredentials);
                //destructure to get reduced proper object
                //const { UserName, UserPassword, KazooAccountName } = storedCredentials;
                //userLoginRequest({ UserName, UserPassword, KazooAccountName });
    
                console.log('USER RELOGIN STARTED');
                const encodedLoginData = Object.keys(storedCredentials)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(storedCredentials[key]))
                    .join('&');
    
                    console.log('action: formBody');
                    console.log(encodedLoginData);
                
                
                    accountLoginAsync(dispatch, encodedLoginData, storedCredentials);
                    dispatch({ type: USER_RELOGIN_PROGRESS });        
            }
        })
        .catch(error => {
            const errorMsg = 'AsyncStorage Error: ' + error.message;
            console.log(errorMsg);
        }); 
    };
};

export const userLoginRequest = (formLoginData) => {
    console.log('USER LOGIN STARTED');
    const encodedLoginData = Object.keys(formLoginData)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formLoginData[key]))
        .join('&');
    
        console.log('action: loginData');
        console.log(formLoginData);
        console.log('action: formBody');
        console.log(encodedLoginData);
    
    return (dispatch) => {
        accountLoginAsync(dispatch, encodedLoginData, formLoginData);
        dispatch({ type: LOGIN_USER_PROGRESS });
    };
};

//dispatch need to be passed as this is private function and no way redux store can inject dispatch function to the return object
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
            if (responseJson.Status === 'Error') {
                loginUserFailed(dispatch, responseJson.Record);
                httpErrorDetail(dispatch, responseJson.Record); // response.Record = 'Api Error'
            } else {
                const tokenData = responseJson.Record.AccessToken;
                setAuthorizationToken(tokenData);
                loginUserSuccess(dispatch, formLoginData, responseJson);
                setCurrentUser(dispatch, formLoginData, responseJson.Record);
            }
        })
      .catch((error) => {
            console.log(JSON.stringify(error.response.data));
            httpErrorDetail(dispatch, error.response);
            loginUserFailed(dispatch, error.response.data);
        });
  };

  //better getKazooProfileData first. If Exist no need for getActiveUser and TeamMember
  //update team member detail should come from event listener and update on background. -future thoughts

  const loginUserSuccess = (dispatch, formLoginData, responseData) => {
        getActiveUser(responseData.Record);
        getTeamMember(responseData.Record);
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: { formLoginData, responseData }
        });
        
        // this is react-navigation's dispatch
        navigationRef.dispatch(NavigationActions.navigate({ 
            routeName: 'Main'
        }));
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

    const authenticatedCredential = { ...formLoginData, isAuthenticated: true };
    const jsonCredentialData = JSON.stringify(authenticatedCredential);  
    saveCredentialData(jsonCredentialData);

    const jsonUserData = JSON.stringify(userData);
    saveProfileData(jsonUserData);

    console.log('JSON_AUTHENTICATED_CREDENTIALS');
    console.log(jsonCredentialData);
    console.log('JSON_USER_DATA');
    console.log(jsonCredentialData);

        getKazooUserProfileStore().then((jsonUserProfile) => {
            if (jsonUserProfile !== null) {
                const storedProfileData = JSON.parse(jsonUserProfile);
                console.log('STORE KAZOO USER PROFILE');
                console.log(storedProfileData);
                if (storedProfileData.length > 0) {
                    setTeamMemberDetail(dispatch, storedProfileData);
                }
            }
            dispatch({
                type: SET_TEAM_MEMBER_DETAIL
            });
        })
        .catch(error => {
            const errorMsg = 'AsyncStorage Error: ' + error.message;
            console.log(errorMsg);
        });

    dispatch({
        type: SET_CURRENT_USER,
        payload: userData
    });
  };

  const setTeamMemberDetail = (dispatch, storedProfileData) => {
    if (storedProfileData.length > 0) {
        getKazooTeamContactsStore().then((jsonStoredTeamData) => { //get from redux instead of storage (so slow)
            console.log('STORE KAZOO TEAM');
            console.log(jsonStoredTeamData);
            if (jsonStoredTeamData !== null) {
                const storedTeamData = JSON.parse(jsonStoredTeamData);
                console.log('STORE KAZOO TEAM');
                console.log(storedTeamData);
                if (storedTeamData.length > 0) {
                    getTeamMemberDetail(storedTeamData, storedProfileData);
                }
            } else {
                console.log('Error: cannot get profileData to get teamMemberDetail');
            }
        })
        .catch(error => {
            const errorMsg = 'AsyncStorage Error: ' + error.message;
            console.log(errorMsg);
        }); 
    }
    dispatch({
        type: SET_TEAM_MEMBER_DETAIL
    });
};
  
  export const userLogoutRequest = () => {
    return (dispatch) => {
      removeCredentialData();
      removeProfileData();
      removeKazooUserProfileStore();
      removeKazooTeamContactsStore();
      removeKazooTeamContactsDetailStore();
      removeKazooPersonalContactsStore();
      setAuthorizationToken(false);
      dispatch({
          type: USER_SIGN_OUT
      });
    };
  };
