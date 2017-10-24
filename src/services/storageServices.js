import { AsyncStorage } from 'react-native';

import {
    PS_CREDENTIALS,
    PS_USER_PROFILE

} from '../process/types/commonTypes';

export const getCredentialData = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_CREDENTIALS);
        return asyncData;
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        throw new Error(errorMsg);
    }
  };

  export const getProfileData = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_USER_PROFILE);
        return asyncData;
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        throw new Error(errorMsg);
    }
  };
  
  export const saveCredentialData = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_CREDENTIALS, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
    }
  };

  export const saveProfileData = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_USER_PROFILE, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
    }
  };

  export const removeCredentialData = async () => {
    try {
        await AsyncStorage.removeItem(PS_CREDENTIALS);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
    }
  };

  export const removeProfileData = async () => {
    try {
        await AsyncStorage.removeItem(PS_USER_PROFILE);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
    }
  };
