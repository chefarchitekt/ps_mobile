import { NavigationActions } from 'react-navigation';
import { navigationRef } from '../../../App';

import {
    SELECT_CONTACT_LISTITEM,
    GET_TEAM_CONTACTS_PROGRESS,
    GET_TEAM_CONTACTS_SUCCESS,
    GET_USER_CONTACTS_PROGRESS,
    GET_USER_CONTACTS_SUCCESS,
    ADD_USER_CONTACTS_PROGRESS,
    ADD_USER_CONTACTS_SUCCESS,
    UPDATE_USER_CONTACTS_PROGRESS,
    UPDATE_USER_CONTACTS_SUCCESS,
    DELETE_USER_CONTACTS_PROGRESS,
    DELETE_USER_CONTACTS_SUCCESS
} from '../../../process/types/appTypes';

import {
    CLIENT_LOGIC_ERRORS, 
    SERVER_LOGIC_ERRORS,
    HTTP_ERRORS
} from '../../../process/types/commonTypes';

export const selectContactListItem = (contactItem) => {
    return ({ //no need for dispatch as it is not asynch
        type: SELECT_CONTACT_LISTITEM,
        payload: contactItem
    });
};

