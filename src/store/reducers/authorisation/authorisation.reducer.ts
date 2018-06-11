import {TOKEN_RECEIVED} from "../../actions/authorisation/authorisation.action-types";

const initialState = {
    token: undefined
};

export default function (state = initialState, action) {
    
    switch (action.type) {
        case TOKEN_RECEIVED:
            return {...state, token: action.token}
    }

    return state;
}