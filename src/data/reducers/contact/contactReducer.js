import {
    GET_ACTIVE_USER_SUCCESS,
    
    SELECT_CONTACT_LISTITEM,
    GET_ACTIVE_CONTACT_SUCCESS,

    GET_TEAM_CONTACTS_SUCCESS,
    EMPTY_TEAM_CONTACTS,
    
    GET_USER_CONTACTS_SUCCESS,
    EMPTY_USER_CONTACTS,
    
    UPDATE_USER_CONTACTS_SUCCESS,
    ADD_USER_CONTACTS_SUCCESS,
    DELETE_USER_CONTACTS_SUCCESS,

    USER_SIGN_OUT
} from '../../../process/types/appTypes';

import {
    CLIENT_LOGIC_ERRORS,
    CONTROL_PANEL_CLICK,
    CREDENTIAL_ERROR,
    HTTP_ERRORS,
    SERVER_LOGIC_ERRORS,
} from '../../../process/types/commonTypes';

const INITIAL_STATE = {
    profileDetail: {},
    isListItemSelected: false,
    selectedUserContact: {},
    activeContact: {},
    teamContacts: [],
    personalContacts: [],
    isLoading: false,
    credentialError: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HTTP_ERRORS:
            return { ...state, credentialError: true, input_errors: action.payload, isLoading: false, httpStatus: 'failed' };
        case CREDENTIAL_ERROR:
            return { ...state, credentialError: true, input_errors: action.payload, isLoading: false, httpStatus: 'failed' };
        case GET_ACTIVE_USER_SUCCESS:
            return { ...state, profileDetail: action.payload };
        case SELECT_CONTACT_LISTITEM:
            return { ...state, selectedUserContact: action.payload, isListItemSelected: true };
        case CONTROL_PANEL_CLICK:
            return { ...state, isListItemSelected: false };
        case GET_ACTIVE_CONTACT_SUCCESS:
            return { ...state, activeContact: action.payload };
        case GET_TEAM_CONTACTS_SUCCESS:
            return { ...state, teamContacts: action.payload, isLoading: false };
        case EMPTY_TEAM_CONTACTS:
            return { ...state, teamContacts: [], isLoading: false };
        case GET_USER_CONTACTS_SUCCESS:
            return { ...state, personalContacts: action.payload, isLoading: false };
        case EMPTY_USER_CONTACTS:
            return { ...state, personalContacts: [], isLoading: false };
        case USER_SIGN_OUT:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
};
