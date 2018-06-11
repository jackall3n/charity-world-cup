import {UNREAD_RECEIVED} from "../../actions/messages/messages.action-types";

const initialState = {
    unread: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UNREAD_RECEIVED:
            return {...state, unread: action.unread}
    }

    return state;
}