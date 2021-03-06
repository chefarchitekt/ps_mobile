export const LOGIN_USER_PROGRESS = 'login_user_progress';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const USER_RELOGIN_PROGRESS = 'user_relogin_progress';
export const LOGIN_INPUT = 'login_input';
export const SET_CURRENT_USER = 'set_current_user';
export const USER_SIGN_OUT = 'user_sign_out';
export const STORED_CREDENTIAL_EXIST = 'stored_credential_exist';
export const STORED_CREDENTIAL_EMPTY = 'stored_credential_empty';
//login user profile
export const GET_ACTIVE_USER_SUCCESS = 'get_active_user_success';
export const SET_ACTIVE_USER = 'set_active_user';

//accountid/users
export const GET_TEAM_CONTACTS_SUCCESS = 'get_team_contacts_success';
export const SET_TEAM_CONTACTS = 'set_team_contacts';
export const EMPTY_TEAM_CONTACTS = 'empty_team_contacts';

//each team members details from accountid/users -> accountid/users/userId
export const GET_TEAM_MEMBERS_DETAIL_SUCCESS = 'get_team_members_detail_success';
export const SET_TEAM_MEMBERS_DETAIL = 'set_team_members_detail';

//from dashboardscreen and click on team member
export const SELECT_CONTACT_LISTITEM = 'select_contact_list_item';
export const GET_ACTIVE_CONTACT_SUCCESS = 'get_active_contact_success';

//user's personal contacts at accountid/users/userId
export const GET_USER_CONTACTS_SUCCESS = 'get_user_contacts_success';
export const SET_USER_CONTACTS = 'set_user_contacts';
export const EMPTY_USER_CONTACTS = 'empty_user_contacts';

//using PUT/POST/DELETE at accountId/users/userId
export const ADD_USER_CONTACTS_SUCCESS = 'add_user_contacts_success';
export const UPDATE_USER_CONTACTS_SUCCESS = 'update_user_contacts_success';
export const DELETE_USER_CONTACTS_SUCCESS = 'delete_user_contacts_success';

//messages filtered from cdr cross section with logged user
export const GET_MSG_LOGS_SUCCESS = 'get_msg_logs_success';
export const EMPTY_MSG_LOGS = 'empty_msg_logs';
export const SET_MSG_LOGS = 'get_msg_logs';
export const SEND_MSG_SUCCESS = 'get_msg_success';

//call logs filtered from cdr cross section with logged user
export const GET_CALL_LOGS_SUCCESS = 'get_call_logs_success';
export const EMPTY_CALL_LOGS = 'empty_call_logs';
export const SET_CALL_LOGS = 'set_call_logs';

//voicemail list
export const GET_VM_LOGS_SUCCESS = 'get_vm_logs_success';
export const EMPTY_VM_LOGS = 'empty_vm_logs';
export const SET_VM_LOGS = 'get_vm_logs';

//donwload and play vm or delete vm with key
export const GET_VM_STREAM_PROGRESS = 'get_vm_stream_progress';
export const GET_VM_STREAM_SUCCESS = 'get_vm_stream_success';
export const DELETE_VM_STREAM_PROGRESS = 'delete_vm_stream_progress';
export const DELETE_VM_STREAM_SUCCESS = 'delete_vm_stream_success';

