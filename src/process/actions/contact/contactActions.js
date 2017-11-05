import { NavigationActions } from 'react-navigation';
import { navigationRef } from '../../../App';

import {
    GET_ACTIVE_USER_SUCCESS,
    SET_ACTIVE_USER,

    SELECT_CONTACT_LISTITEM,
    GET_ACTIVE_CONTACT_SUCCESS,

    GET_TEAM_CONTACTS_SUCCESS,
    SET_TEAM_CONTACTS,
    EMPTY_TEAM_CONTACTS,

    GET_USER_CONTACTS_SUCCESS,
    SET_USER_CONTACTS,
    EMPTY_USER_CONTACTS,

    UPDATE_USER_CONTACTS_SUCCESS,
    ADD_USER_CONTACTS_SUCCESS,
    DELETE_USER_CONTACTS_SUCCESS   
} from '../../../process/types/appTypes';

import {
    CLIENT_LOGIC_ERRORS, 
    SERVER_LOGIC_ERRORS,
    HTTP_ERRORS,
    CREDENTIAL_ERROR,
    CONTROL_PANEL_CLICK
} from '../../../process/types/commonTypes';

import {
    saveKazooPersonalContactsStore,
    saveKazooTeamContactsStore,
    saveKazooUserProfileStore,
} from '../../../services/storage/storageKazooContactServices';

import { 
    User
 } from '../../../services/data/userDataAccessServices';

export const selectContactListItem = (contactItem) => {
    return ({ //no need for dispatch as it is not asynch
        type: SELECT_CONTACT_LISTITEM,
        payload: contactItem
    });
};

//if we dont pass param, it will run anyway without passing the payload.
export const controlPanelClick = (contactItem) => {
    return ({
        type: CONTROL_PANEL_CLICK,
        payload: contactItem
    });
};

export const getActiveUser = (dispatch, userSessionData) => {
    const accessParams = {
        urlParams: {
            accountId: userSessionData.KazooAccountId,
            userId: userSessionData.KazooUserId,
        },
        successFunc: (response) => {
            dispatch({
                type: GET_ACTIVE_USER_SUCCESS,
                payload: response.data
            });
            const jsonData = JSON.stringify(response.data);
            saveKazooUserProfileStore(jsonData);
            dispatch({
                type: SET_ACTIVE_USER
            });
            //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
            //at http services we already passed this response as response.data
            getPersonalContact(dispatch, response.data);
        },
        errorFunc: (error) => {
            console.log('ERROR GET ACTIVE USER: ');
            console.log(error);
            httpErrorDetail(dispatch, error);
        }
    };
    User.getUser(accessParams.urlParams, accessParams.successFunc, accessParams.errorFunc);
};

export const getPersonalContact = (dispatch, userSessionData) => {
    const personalContacts = [];
    if (userSessionData.personal_contact_list.length > 0) {
        const teamArray = userSessionData.personal_contact_list;
        for (let i = 0; i < teamArray.length; i++) {
            const contactObject = {
                id: i,
                custInfo: teamArray[i].CustomerInfo,
                avatar: '',
                icon: '',
                name: teamArray[i].name,   
                address: teamArray[i].name,                        
                email: teamArray[i].address,
                number: cleanCallIdNumber(teamArray[i].number),
                mobileNumber: cleanCallIdNumber(teamArray[i].mobileNumber),
                homeNumber: cleanCallIdNumber(teamArray[i].homeNumber),
                workNumber: cleanCallIdNumber(teamArray[i].workNumber),
                otherNumber: cleanCallIdNumber(teamArray[i].otherNumber),
                faxNumber: cleanCallIdNumber(teamArray[i].faxNumber),
                company: teamArray[i].company,
                url: teamArray[i].url,
                role: teamArray[i].role,
                type: teamArray[i].type
            };
            personalContacts.push(contactObject);

            if (i === teamArray.length - 1) {
                dispatch({
                    type: GET_USER_CONTACTS_SUCCESS,
                    payload: personalContacts
                });

                const jsonData = JSON.stringify(personalContacts);
                saveKazooPersonalContactsStore(jsonData);
                dispatch({
                    type: SET_USER_CONTACTS
                });
            }
        } 
    } else {
        dispatch({
            type: EMPTY_USER_CONTACTS
        });
        saveKazooPersonalContactsStore([]);
    }
};

export const getTeamMember = (dispatch, userSessionData) => {
    const teamMemberDetail = [];
    const accessParams = {
        urlParams: {
            accountId: userSessionData.KazooAccountId,
            filters: {},
        },
        successFunc: (response) => {
            console.log('SUCCESS GET TEAM LIST: ');
            console.log(response.data);
            if (response.data.length > 0) {
                const teamArray = response.data;
                for (let i = 0; i < teamArray.length; i++) {
                    if (teamArray[i].id !== userSessionData.KazooUserId) {
                        const userObject = {
                            id: teamArray[i].id,
                            is_active: true,
                            avatar_url: '',
                            //avatar_url: (response.data.profile.profile_picture !== undefined && response.data.profile.profile_picture !== wrongUrlPicture) ? response.data.profile.profile_picture : noPictureImg,
                            name: teamArray[i].first_name + ' ' + teamArray[i].last_name,                           
                            email: teamArray[i].email,
                            number: '0',
                            extension: '0',
                            status: 'online',
                            priv_level: teamArray[i].priv_level,
                        };
                        teamMemberDetail.push(userObject);

                        if (i === teamArray.length - 1) {
                            dispatch({
                                type: GET_TEAM_CONTACTS_SUCCESS,
                                payload: teamMemberDetail
                            });

                            navigationRef.dispatch(NavigationActions.navigate({ 
                                routeName: 'Main'
                            }));

                            const jsonData = JSON.stringify(teamMemberDetail);
                            saveKazooTeamContactsStore(jsonData);
                            dispatch({
                                type: SET_TEAM_CONTACTS
                            });
                        }
                    } 
                } 
            } else {
                dispatch({
                    type: EMPTY_TEAM_CONTACTS
                });

                navigationRef.dispatch(NavigationActions.navigate({ 
                    routeName: 'Main'
                }));

                saveKazooTeamContactsStore([]);
            }
        },
        errorFunc: (error) => {
            saveKazooTeamContactsStore([]);
            console.log('ERROR GET USER: ');
            console.log(error);
            httpErrorDetail(dispatch, error);
        }
    };
    User.getUsers(accessParams.urlParams, accessParams.successFunc, accessParams.errorFunc);
};

const cleanCallIdNumber = (numberString) => {
    if (numberString !== '' && numberString !== null && numberString !== undefined) {
        const cleanNumber = numberString.replace(/[\+\(\)-]|\s/g, "");
        
        if (cleanNumber.startsWith("1")) {
            const cleanNumberStartWithOne = cleanNumber.substring(1);
            return cleanNumberStartWithOne;
        }
    
        return cleanNumber;
    } else {
        return '';
    }
};

export const getActiveContact = (selectedUserId, KazooAccountId, contactType, personalContactObject) => {
    const noPictureImg = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE4OC4xNDkgMTg4LjE0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTg4LjE0OSAxODguMTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8ZGVmcz4KCQkJPGNpcmNsZSBpZD0iU1ZHSURfMV8iIGN4PSI5NC4wNzQiIGN5PSI5NC4wNzUiIHI9Ijk0LjA3NCIvPgoJCTwvZGVmcz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZmlsbDojRTZFN0UyOyIvPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO2ZpbGw6I0VDQzE5QzsiIGQ9Ik0xMjYuNzA4LDE1My45NDZoLTAuMDJjLTIuMDQxLTEuNTQ1LTQuMTc4LTIuOTE5LTYuNDI5LTQuMTU5ICAgIGMtMC4wNTgtMC4wMzgtMC4xMTUtMC4wNzYtMC4xOTEtMC4wOTVjLTEwLjY0Ni01Ljg3Ni0xNy44NTctMTcuMjA5LTE3Ljg1Ny0zMC4yMzlsLTE2LjEyMS0wLjA3NyAgICBjMCwxMy4wNjktNy4yNjksMjQuNDU5LTE4LjAxLDMwLjMxNWMwLDAtMC4wMTksMC0wLjAzOCwwLjAxOWMtMi4yNzEsMS4yNC00LjQ0NSwyLjYzMy02LjUwNiw0LjE1OSAgICBjLTEzLjM1NSw5Ljk0LTIxLjk5NywyNS44MzItMjEuOTk3LDQzLjc2NmgxMDkuMDdDMTQ4LjYxLDE3OS43NCwxNDAuMDA2LDE2My44ODUsMTI2LjcwOCwxNTMuOTQ2eiIvPgoJCTxwYXRoIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZmlsbDojMTY4RUY3OyIgZD0iTTE0OC42MDksMTk3LjYyOUgzOS41MzhjMC0xNy45MzQsOC42NDItMzMuODI2LDIxLjk5Ny00My43NjYgICAgYzIuMDYxLTEuNTI2LDQuMjM1LTIuOTE5LDYuNTA1LTQuMTU5YzAuMDItMC4wMTksMC4wMzktMC4wMTksMC4wMzktMC4wMTljMS43NTUtMC45NzMsMy40MzQtMi4wOCw0Ljk3OS0zLjMzOSAgICBjNS4zNDIsNS40NzYsMTIuODAyLDguODcyLDIxLjA2Myw4Ljg3MmM4LjI0MiwwLDE1LjY4My0zLjM5NiwyMS4wMjQtOC44NTNjMS41MjYsMS4yNTksMy4xODcsMi4zNjYsNC45MjIsMy4zMiAgICBjMC4wNzYsMC4wMTksMC4xMzQsMC4wNTcsMC4xOTEsMC4wOTVjMi4yNTEsMS4yNCw0LjM4OCwyLjYxNCw2LjQyOSw0LjE1OWgwLjAyQzE0MC4wMDUsMTYzLjg3OSwxNDguNjA5LDE3OS43MzMsMTQ4LjYwOSwxOTcuNjI5eiAgICAiLz4KCQk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO2ZpbGw6I0VDQzE5QzsiIGQ9Ik01Mi4yMTcsMzguMDkxdjQyLjgzNmMwLDI4Ljk3NiwyNS40MzcsNTIuNDY1LDQxLjg1OCw1Mi40NjUgICAgYzE2LjQxOSwwLDQxLjg1OC0yMy40ODksNDEuODU4LTUyLjQ2NVYzOC4wOTFINTIuMjE3eiIvPgoJCTxwYXRoIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZmlsbDojNDk0ODQ2OyIgZD0iTTEyOS4xMTQsMzAuMjA3Yy05LjEyMy0xMS40MjMtMjIuOTcyLTE4LjcyNi0zOC40NjMtMTguNzI2ICAgIGMtMjcuNTIxLDAtNDkuODEsMjIuOTcyLTQ5LjgxLDUxLjMwMWMwLDE1LjAzNiw2LjI2NywyOC41NTYsMTYuMjc0LDM3LjkzMmMtMi41NzgtNi40Ny00LjAxOC0xMy43MjItNC4wMTgtMjEuMzggICAgYzAtMTIuMzA3LDMuNzQtMjMuNTc4LDkuOTU3LTMyLjI0NmM2LjU5NiwyLjkzMiwxNy4yODYsMy45OTMsMjkuMDExLDIuMzc2YzExLjYyNS0xLjU5MiwyMS41MzEtNS40MzMsMjcuMTE2LTEwLjAwNyAgICBjMTAuMTg1LDguOTk2LDE2LjgwNiwyMy41MDIsMTYuODA2LDM5Ljg3N2MwLDguMzktMS43MTksMTYuMjc1LTQuODAyLDIzLjE5OWM5LjgzLTQuMDY5LDE3LjA1OC0xOC41NzQsMTcuMDU4LTM1LjgzNSAgICBDMTQ4LjI0Myw0OC4yMjUsMTM5Ljk1NCwzMi45ODcsMTI5LjExNCwzMC4yMDd6Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='
    const wrongUrlPicture = '/Content/Image/Profiles/nopicture1.jpg';
    return (dispatch) => {
        const memberToSeek = { 
            urlParams: {
                accountId: KazooAccountId,
                userId: selectedUserId
            },
            successFunc: (response) => {
                const userObject = {
                    id: response.data.id,
                    is_active: response.data.is_active,
                    //avatar_url: '',
                    avatar_url: (response.data.profile.profile_picture !== undefined && response.data.profile.profile_picture !== wrongUrlPicture) ? response.data.profile.profile_picture : noPictureImg,
                    email: response.data.email,
                    name: response.data.first_name + ' ' + response.data.last_name,
                    status: response.data.status,
                    number: cleanCallIdNumber(response.data.caller_id_number),
                    extension: response.data.extension,
                    presence_id: response.data.presence_id,
                    priv_level: response.data.priv_level,
                };
                dispatch({
                    type: GET_ACTIVE_CONTACT_SUCCESS,
                    payload: userObject
                });
            },
            erroFunc: (error) => {
                console.log('ERROR GET CONTACT DETAIL: ');
                console.log(error);
                httpErrorDetail(dispatch, error);
            }
            
        };     
        if (contactType === 'team') {
            User.getUser(memberToSeek.urlParams, memberToSeek.successFunc, memberToSeek.errorFunc);
        } else {
            dispatch({
                type: GET_ACTIVE_CONTACT_SUCCESS,
                payload: personalContactObject
            });
        }
    };
};

const httpErrorDetail = (dispatch, kazoooErrorDetail) => {
    if (kazoooErrorDetail.data.error === '401') {
        dispatch({
            type: CREDENTIAL_ERROR,
            payload: kazoooErrorDetail.data
        });
    } else {
        dispatch({
            type: HTTP_ERRORS,
            payload: kazoooErrorDetail.data
        });
    }  
};

//58% slower https://jsperf.com/for-of-vs-for-loop
    /*
    for (const member of teamArray) {
        const memberToSeek = { 
            urlParams: {
                accountId: userSessionData.KazooAccountId,
                userId: member.id
            },
            successFunc: (response) => {
                if (response.data.id !== userSessionData.KazooUserId) {
                    containerToFill.push(response.data);
                }
            },
            erroFunc: (error) => {
                console.log('ERROR GET TEAM DETAIL: ');
                console.log(error);
            }
            
        };     
        User.getUser(memberToSeek.urlParams, memberToSeek.successFunc, memberToSeek.errorFunc);
        
    }
    */

/*
const getTeamMembersDetail = (dispatch, teamArray, userSessionData) => {
const noPictureImg = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE4OC4xNDkgMTg4LjE0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTg4LjE0OSAxODguMTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8ZGVmcz4KCQkJPGNpcmNsZSBpZD0iU1ZHSURfMV8iIGN4PSI5NC4wNzQiIGN5PSI5NC4wNzUiIHI9Ijk0LjA3NCIvPgoJCTwvZGVmcz4KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZmlsbDojRTZFN0UyOyIvPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CgkJPC9jbGlwUGF0aD4KCQk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO2ZpbGw6I0VDQzE5QzsiIGQ9Ik0xMjYuNzA4LDE1My45NDZoLTAuMDJjLTIuMDQxLTEuNTQ1LTQuMTc4LTIuOTE5LTYuNDI5LTQuMTU5ICAgIGMtMC4wNTgtMC4wMzgtMC4xMTUtMC4wNzYtMC4xOTEtMC4wOTVjLTEwLjY0Ni01Ljg3Ni0xNy44NTctMTcuMjA5LTE3Ljg1Ny0zMC4yMzlsLTE2LjEyMS0wLjA3NyAgICBjMCwxMy4wNjktNy4yNjksMjQuNDU5LTE4LjAxLDMwLjMxNWMwLDAtMC4wMTksMC0wLjAzOCwwLjAxOWMtMi4yNzEsMS4yNC00LjQ0NSwyLjYzMy02LjUwNiw0LjE1OSAgICBjLTEzLjM1NSw5Ljk0LTIxLjk5NywyNS44MzItMjEuOTk3LDQzLjc2NmgxMDkuMDdDMTQ4LjYxLDE3OS43NCwxNDAuMDA2LDE2My44ODUsMTI2LjcwOCwxNTMuOTQ2eiIvPgoJCTxwYXRoIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZmlsbDojMTY4RUY3OyIgZD0iTTE0OC42MDksMTk3LjYyOUgzOS41MzhjMC0xNy45MzQsOC42NDItMzMuODI2LDIxLjk5Ny00My43NjYgICAgYzIuMDYxLTEuNTI2LDQuMjM1LTIuOTE5LDYuNTA1LTQuMTU5YzAuMDItMC4wMTksMC4wMzktMC4wMTksMC4wMzktMC4wMTljMS43NTUtMC45NzMsMy40MzQtMi4wOCw0Ljk3OS0zLjMzOSAgICBjNS4zNDIsNS40NzYsMTIuODAyLDguODcyLDIxLjA2Myw4Ljg3MmM4LjI0MiwwLDE1LjY4My0zLjM5NiwyMS4wMjQtOC44NTNjMS41MjYsMS4yNTksMy4xODcsMi4zNjYsNC45MjIsMy4zMiAgICBjMC4wNzYsMC4wMTksMC4xMzQsMC4wNTcsMC4xOTEsMC4wOTVjMi4yNTEsMS4yNCw0LjM4OCwyLjYxNCw2LjQyOSw0LjE1OWgwLjAyQzE0MC4wMDUsMTYzLjg3OSwxNDguNjA5LDE3OS43MzMsMTQ4LjYwOSwxOTcuNjI5eiAgICAiLz4KCQk8cGF0aCBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO2ZpbGw6I0VDQzE5QzsiIGQ9Ik01Mi4yMTcsMzguMDkxdjQyLjgzNmMwLDI4Ljk3NiwyNS40MzcsNTIuNDY1LDQxLjg1OCw1Mi40NjUgICAgYzE2LjQxOSwwLDQxLjg1OC0yMy40ODksNDEuODU4LTUyLjQ2NVYzOC4wOTFINTIuMjE3eiIvPgoJCTxwYXRoIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZmlsbDojNDk0ODQ2OyIgZD0iTTEyOS4xMTQsMzAuMjA3Yy05LjEyMy0xMS40MjMtMjIuOTcyLTE4LjcyNi0zOC40NjMtMTguNzI2ICAgIGMtMjcuNTIxLDAtNDkuODEsMjIuOTcyLTQ5LjgxLDUxLjMwMWMwLDE1LjAzNiw2LjI2NywyOC41NTYsMTYuMjc0LDM3LjkzMmMtMi41NzgtNi40Ny00LjAxOC0xMy43MjItNC4wMTgtMjEuMzggICAgYzAtMTIuMzA3LDMuNzQtMjMuNTc4LDkuOTU3LTMyLjI0NmM2LjU5NiwyLjkzMiwxNy4yODYsMy45OTMsMjkuMDExLDIuMzc2YzExLjYyNS0xLjU5MiwyMS41MzEtNS40MzMsMjcuMTE2LTEwLjAwNyAgICBjMTAuMTg1LDguOTk2LDE2LjgwNiwyMy41MDIsMTYuODA2LDM5Ljg3N2MwLDguMzktMS43MTksMTYuMjc1LTQuODAyLDIzLjE5OWM5LjgzLTQuMDY5LDE3LjA1OC0xOC41NzQsMTcuMDU4LTM1LjgzNSAgICBDMTQ4LjI0Myw0OC4yMjUsMTM5Ljk1NCwzMi45ODcsMTI5LjExNCwzMC4yMDd6Ii8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=='
const wrongUrlPicture = '/Content/Image/Profiles/nopicture1.jpg';
    const teamMemberDetail = [];
    if (teamArray.length > 0) {
        for (let i = 0; i < teamArray.length; i++) {
            const memberToSeek = { 
                urlParams: {
                    accountId: userSessionData.KazooAccountId,
                    userId: teamArray[i].id
                },
                successFunc: (response) => {
                    if (teamArray[i].id !== userSessionData.KazooUserId) {
                        const userObject = {
                            id: response.data.id,
                            is_active: response.data.is_active,
                            avatar_url: '',
                            //avatar_url: (response.data.profile.profile_picture !== undefined && response.data.profile.profile_picture !== wrongUrlPicture) ? response.data.profile.profile_picture : noPictureImg,
                            email: response.data.email,
                            name: response.data.first_name + ' ' + response.data.last_name,
                            status: response.data.status,
                            number: cleanCallIdNumber(response.data.caller_id_number),
                            extension: response.data.extension,
                            presence_id: response.data.presence_id,
                            priv_level: response.data.priv_level,
                        };
                        teamMemberDetail.push(userObject);
                    }
                    if (i === teamArray.length - 1) {
                        console.log('TEAM MEMBER DETAIL');
                        console.log(teamMemberDetail);
                        dispatch({
                            type: GET_TEAM_MEMBERS_DETAIL_SUCCESS,
                            payload: teamMemberDetail
                        });
                        const jsonData = JSON.stringify(teamMemberDetail);
                        saveKazooTeamContactsDetailStore(jsonData);
                        dispatch({
                            type: SET_TEAM_MEMBERS_DETAIL
                        });
                    }
                },
                erroFunc: (error) => {
                    console.log('ERROR GET TEAM DETAIL: ');
                    console.log(error);
                }
                
            };     
            User.getUser(memberToSeek.urlParams, memberToSeek.successFunc, memberToSeek.errorFunc);
        }
    } else {
            teamMemberDetail.push({});
            saveKazooTeamContactsDetailStore([]);
            console.log('TEAM MEMBER DETAIL');
            console.log(teamMemberDetail);
    }
};
*/
