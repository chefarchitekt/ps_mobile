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

import { 
    User
 } from '../../../services/data/userDataAccessServices';

export const selectContactListItem = (contactItem) => {
    return ({ //no need for dispatch as it is not asynch
        type: SELECT_CONTACT_LISTITEM,
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
            console.log('SUCCESS GET ACTIVE USER: ');
            //kazoo response for is { data: { data: {...}, node: {..}, request_id: {..}, revision: {..}, status: {..}, version: {..} }}
            //at http services we already passed this response as response.data
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
            console.log('SUCCESS GET TEAM LIST: ');
            console.log(response.data);
            const teamMembers = [];
            getTeamMemberDetail(response.data, userSessionData, teamMembers);
            console.log('SUCCESS GET TEAM LIST DETAIL: ');
            console.log(teamMembers);
        },
        errorFunc: (error) => {
            console.log('ERROR GET USER: ');
            console.log(error);
        }
    };
    User.getUsers(accessParams.urlParams, accessParams.successFunc, accessParams.errorFunc);
};

const getTeamMemberDetail = (membersArrayData, userSessionData, containerToFill) => {
    for (const member of membersArrayData.data) {
        const memberToSeek = { 
            urlParams: {
                KazooAccountId: userSessionData.KazooAccountId,
                KazooUserId: member.id
            },
            successFunc: (response) => {
                containerToFill.push(response.data);
            },
            erroFunc: (error) => {
                console.log('ERROR GET TEAM DETAIL: ');
                console.log(error);
            }
            
        };     
        User.getUser(memberToSeek.urlParams, memberToSeek.successFunc, memberToSeek.errorFunc);
    }
};

