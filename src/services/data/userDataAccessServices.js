import { getJSON, postJSON, putJSON, patchJSON, deleteJSON  } from '../httpServices';
import { phoneSpeakApi } from '../httpResources';

export const User = {
    getUser: (params, successFunc, errorFunc) => {
        const urlParams = {
            accountId: params.accountId,
            userId: params.userId
        };
        getJSON(phoneSpeakApi.user.get, urlParams, successFunc, errorFunc);
    },
    getUsers: (params, successFunc, errorFunc) => {
        const urlParams = {
            accountId: params.accountId,
            filters: params.filters || {}
        };
        getJSON(phoneSpeakApi.user.list, urlParams, successFunc, errorFunc);
    }
};
