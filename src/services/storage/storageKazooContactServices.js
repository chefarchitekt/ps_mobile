import { AsyncStorage } from 'react-native';

import {
    PS_KAZOO_USER_PROFILE,
    PS_TEAM_CONTACTS,
    PS_PERSONAL_CONTACTS,
    PS_TEAM_CONTACTS_DETAIL
} from '../../process/types/storageTypes';

export const getKazooUserProfileStore = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_KAZOO_USER_PROFILE);
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

  export const getKazooTeamContactsStore = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_TEAM_CONTACTS);
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

  export const getKazooTeamContactsDetailStore = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_TEAM_CONTACTS_DETAIL);
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

  export const getKazooPersonalContactsStore = async () => {
    try {
        const asyncData = await AsyncStorage.getItem(PS_PERSONAL_CONTACTS);
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
  
  export const saveKazooUserProfileStore = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_KAZOO_USER_PROFILE, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const saveKazooTeamContactsStore = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_TEAM_CONTACTS, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const saveKazooTeamContactsDetailStore = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_TEAM_CONTACTS_DETAIL, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const saveKazooPersonalContactsStore = async (valueToSave) => {
    try {
        await AsyncStorage.setItem(PS_PERSONAL_CONTACTS, valueToSave);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const removeKazooUserProfileStore = async () => {
    try {
        await AsyncStorage.removeItem(PS_KAZOO_USER_PROFILE);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const removeKazooTeamContactsStore = async () => {
    try {
        await AsyncStorage.removeItem(PS_TEAM_CONTACTS);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const removeKazooTeamContactsDetailStore = async () => {
    try {
        await AsyncStorage.removeItem(PS_TEAM_CONTACTS_DETAIL);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };

  export const removeKazooPersonalContactsStore = async () => {
    try {
        await AsyncStorage.removeItem(PS_PERSONAL_CONTACTS);
    } catch (error) {
        const errorMsg = 'AsyncStorage error: ' + error;
        console.log(errorMsg);
        //throw new Error(error);
    }
  };
