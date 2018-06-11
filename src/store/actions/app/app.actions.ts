import {CHANGE_MENU_DRAWER_STATE, INITIALIZE_APPLICATION_REQUESTED, INITIALIZE_APPLICATION_RESPONSE, INITIALIZED_APPLICATION} from "./app.action-types";
import {account} from "../account/account.actions";
import {authorisation} from "../authorisation/authorisation.actions";
import {clients} from "../clients/clients.actions";

import AuthenticationService from "../../../services/authentication.service";
import {messages} from "../messages/messages.actions";

function openMenu() {
    return {
        type: CHANGE_MENU_DRAWER_STATE,
        active: true
    }
}

function closeMenu() {
    return {
        type: CHANGE_MENU_DRAWER_STATE,
        active: false
    }
}

function initialized() {    
    return {
        type: INITIALIZED_APPLICATION
    }
}

function initialize_application_request() {
    return dispatch => {
        return new AuthenticationService().generateToken().then(response => {
            dispatch(account.received(response.account));
            dispatch(authorisation.token_received(response.token));
            dispatch(messages.get_unread(response.account.consultantNumber));
            dispatch(clients.request(() => {            
                dispatch(initialized())
            }))
        })
    }
}

function initialize_application_response(response) {
    return {
        type: INITIALIZE_APPLICATION_RESPONSE,
        response
    }
}

export const app = {
    initialize: initialize_application_request,
    menu: {
        open: openMenu,
        close: closeMenu
    }
};