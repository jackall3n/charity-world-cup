import {ACCOUNT_RECEIVED} from "../../actions/account/account.action-types";

const initialState = {
    consultant: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_RECEIVED:
            return {...state, ...action.account}
    }

    return state;
}