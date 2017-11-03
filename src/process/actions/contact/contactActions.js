import { saveCredentialData } from '../../../services/storage/storageProfileServices';
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
    HTTP_ERRORS,
    CONTROL_PANEL_CLICK
} from '../../../process/types/commonTypes';

import { 
    saveKazooUserProfileStore,
    saveKazooTeamContactsStore,
    saveKazooTeamContactsDetailStore,
    saveKazooPersonalContactsStore
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

export const getActiveUser = (userSessionData) => {
    const accessParams = {
        urlParams: {
            accountId: userSessionData.KazooAccountId,
            userId: userSessionData.KazooUserId,
        },
        successFunc: (response) => {
            const jsonData = JSON.stringify(response.data);
            saveKazooUserProfileStore(jsonData);
            //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
            //at http services we already passed this response as response.data
            console.log('SUCCESS GET ACTIVE USER: ');
            console.log(response.data);
        },
        errorFunc: (error) => {
            console.log('ERROR GET ACTIVE USER: ');
            console.log(error);
        }
    };
    User.getUser(accessParams.urlParams, accessParams.successFunc, accessParams.errorFunc);
};

export const getTeamMember = (userSessionData) => {
    const accessParams = {
        urlParams: {
            accountId: userSessionData.KazooAccountId,
            filters: {},
        },
        successFunc: (response) => {
            const jsonData = JSON.stringify(response.data);
            saveKazooTeamContactsStore(jsonData);
            console.log('SUCCESS GET TEAM LIST: ');
            console.log(response.data);
        },
        errorFunc: (error) => {
            saveKazooTeamContactsStore([]);
            console.log('ERROR GET USER: ');
            console.log(error);
        }
    };
    User.getUsers(accessParams.urlParams, accessParams.successFunc, accessParams.errorFunc);
};

export const getTeamMemberDetail = (teamArray, userSessionData) => {
    console.log('teamArray: ');
    console.log(teamArray);
    console.log('userSessionData: ');
    console.log(userSessionData);

    /* //58% slower https://jsperf.com/for-of-vs-for-loop
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
    const teamMemberDetail = [];
    if (teamArray.length > 0) {
        for (let i = 0; i < teamArray.length; i++) {
            const memberToSeek = { 
                urlParams: {
                    accountId: userSessionData.KazooAccountId,
                    userId: teamArray[i].id
                },
                successFunc: (response) => {
                    if (response.data.id !== userSessionData.KazooUserId) {
                        teamMemberDetail.push(response.data);
                    }
                    if (i === teamArray.length - 1) {
                        const jsonData = JSON.stringify(teamMemberDetail);
                        saveKazooTeamContactsDetailStore(jsonData);
                        console.log('TEAM MEMBER DETAIL');
                        console.log(teamMemberDetail);
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

