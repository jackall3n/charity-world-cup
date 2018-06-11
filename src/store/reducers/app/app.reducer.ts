import {CHANGE_MENU_DRAWER_STATE, INITIALIZE_APPLICATION_RESPONSE, INITIALIZED_APPLICATION} from "../../actions/app/app.action-types";

const initialState = {
    menu_open: false,
    initializing: true,
    notifications: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_MENU_DRAWER_STATE:
            return {...state, menu_open: action.active}
        case INITIALIZE_APPLICATION_RESPONSE:
            return state;
        case INITIALIZED_APPLICATION:
            return {...state, initializing: false}
    }

    return state;
}