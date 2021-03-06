import {
    LOGIN_USER_PROGRESS,
    LOGIN_USER_SUCCESS,
    LOGIN_INPUT,
    SET_CURRENT_USER,
    USER_SIGN_OUT,
    STORED_CREDENTIAL_EXIST,
    STORED_CREDENTIAL_EMPTY
} from '../../../process/types/appTypes';

import {
    CLIENT_LOGIC_ERRORS,
    SERVER_LOGIC_ERRORS
} from '../../../process/types/commonTypes';

const INITIAL_STATE = {
    UserName: '',
    UserPassword: '',
    KazooAccountName: '',
    IsPersistent: true,
    isLoading: false,
    input_errors: {
        UserName: '',
        UserPassword: '',
        KazooAccountName: ''
    },
    isAuthenticated: false,
    user: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_INPUT:
            return { ...state, [action.payload.prop]: action.payload.value };
        case LOGIN_USER_PROGRESS:
            return { ...state, isLoading: true };
        case CLIENT_LOGIC_ERRORS:
            return { ...state, input_errors: action.payload, isLoading: false, httpStatus: 'failed' };
        case SERVER_LOGIC_ERRORS:
            return { ...state, input_errors: action.payload, isLoading: false, httpStatus: 'failed' };
        case LOGIN_USER_SUCCESS:
            return { 
                ...state, 
                UserName: action.payload.formLoginData.UserName,
                UserPassword: '', 
                KazooAccountName: action.payload.formLoginData.KazooAccountName,
                isAuthenticated: true,
                isLoading: false, 
                httpStatus: 'success' 
            };
        case SET_CURRENT_USER:
            return { 
                ...state, 
                isAuthenticated: true, 
                user: action.payload 
            };
        case STORED_CREDENTIAL_EXIST:
            return { 
                ...state, 
                UserName: action.payload.storedCredentials.UserName,
                UserPassword: '', 
                KazooAccountName: action.payload.storedCredentials.KazooAccountName,
                isAuthenticated: true,
                isLoading: false, 
                httpStatus: 'success' 
            };
        case STORED_CREDENTIAL_EMPTY:
        return { ...INITIAL_STATE, isAuthenticated: false, user: {} };
        case USER_SIGN_OUT:
            return { ...INITIAL_STATE, isAuthenticated: false, user: {} };
        default:
            return { ...state, isLoading: false };
    }
};

