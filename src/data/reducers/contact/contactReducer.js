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
    CONTROL_PANEL_CLICK
} from '../../../process/types/commonTypes';

const INITIAL_STATE = {
    personalContacts: [],
    teamContacts: [],
    activeContact: {},
    isListItemSelected: false,
    isLoading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_CONTACT_LISTITEM:
            return { ...state, activeContact: action.payload, isListItemSelected: true };
        case CONTROL_PANEL_CLICK:
            return { ...state, isListItemSelected: false };
        default:
            return state;
    }
};
