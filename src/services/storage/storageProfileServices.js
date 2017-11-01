import { AsyncStorage } from 'react-native';

import {
    PS_CREDENTIALS,
    PS_USER_PROFILE
} from '../../process/types/storageTypes';

export const getCredentialData = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_CREDENTIALS);
        if (asyncData !== null) {
            return asyncData;
         } else {
            return null;
        }
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const getProfileData = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_USER_PROFILE);
        if (asyncData !== null) {
            return asyncData;
         } else {
            return null;
        }
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };
  
  export const saveCredentialData = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_CREDENTIALS, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const saveProfileData = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_USER_PROFILE, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const removeCredentialData = async () => {
    try {
        await AsyncStorage.removeItem(PS_CREDENTIALS);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const removeProfileData = async () => {
    try {
        await AsyncStorage.removeItem(PS_USER_PROFILE);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const isSignIn = async () => {
    const jsonStoredCredential = await getCredentialData();

    if (jsonStoredCredential !== null) {
        const storedCredential = JSON.parse(jsonStoredCredential);
        
        if (storedCredential.isAuthenticated !== null && storedCredential.isAuthenticated === true) {
            return true;
        } 
        return false;
    } else {
        return false;
    }
};
