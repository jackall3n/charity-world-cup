import {INITIALIZED} from "./app.action-types";
import {teams} from "../teams/teams.actions";
import {account} from "../account/account.actions";

function initialized() {
    return {
        type: INITIALIZED
    }
}

function initialize() {
    return dispatch => {
        dispatch(teams.request());
        dispatch(account.get(() => {
            dispatch(initialized())
        }))
    }
}

export const app = {
    initialize
};