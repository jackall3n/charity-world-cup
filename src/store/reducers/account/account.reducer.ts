import {ACCOUNT_RECEIVED} from "../../actions/account/account.action-types";

const initialState = {
    user: undefined
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_RECEIVED:
            return {...state, user: action.user}
    }

    return state;
}