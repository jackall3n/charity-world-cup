import {TOKEN_RECEIVED, LOGOUT_REQUESTED} from "./authorisation.action-types";

function token_received(token) {    
    return {
        type: TOKEN_RECEIVED,
        token
    }
}

function logout() {    
    return {
        type: LOGOUT_REQUESTED
    }
}

export const authorisation = {
    logout: logout,
    token_received: token_received
};