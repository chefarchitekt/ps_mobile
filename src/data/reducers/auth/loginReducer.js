import {
    LOGIN_USER_PROGRESS,
    LOGIN_USER_SUCCESS,
    LOGIN_INPUT
} from '../../../process/types/appTypes';

import {
    HTTP_ERRORS,
    CLIENT_LOGIC_ERRORS,
    SERVER_LOGIC_ERRORS
} from '../../../process/types/commonTypes';

const INITIAL_STATE = {

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
            return { ...INITIAL_STATE, isLoading: false, httpStatus: 'success' };
        default:
            return { ...state, isLoading: false };
    }
};

