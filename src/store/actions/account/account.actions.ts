import {ACCOUNT_RECEIVED, DONATION_RECEIVED} from "./account.action-types";
import AuthenticationService from "../../../services/authentication.service";

function account_received(me) {
    return {
        type: ACCOUNT_RECEIVED,
        user: me
    }
}

function get(callback) {
    return dispatch => {
        return new AuthenticationService().me().then(user => {
            dispatch(account_received(user));
            callback(user);
        }).catch(error => {
            callback({});
        })
    }
}

function donation_received(donation) {
    return {
        type: DONATION_RECEIVED,
        donation
    }
}

export const account = {
   get,
   donation_received
};