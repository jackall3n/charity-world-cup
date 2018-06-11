import {ACCOUNT_RECEIVED} from "./account.action-types";

function account_received(account) {    
    return {
        type: ACCOUNT_RECEIVED,
        account
    }
}

export const account = {
    received: account_received
};