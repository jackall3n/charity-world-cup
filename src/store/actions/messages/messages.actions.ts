import {UNREAD_RECEIVED} from "./messages.action-types";
import MessagesService from "../../../services/messages.service";

function get_unread(advisorIdentifier) {
    return dispatch => {
        return new MessagesService().getUnread(advisorIdentifier).then(unread => {
            dispatch(unread_received(unread))
        })
    }
}

function unread_received(unread) {
    return {
        type: UNREAD_RECEIVED,
        unread
    }
}

export const messages = {
    get_unread
};