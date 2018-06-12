import {INITIALIZED} from "../../actions/app/app.action-types";

const initialState = {
    initialized: false
};

export default function (state = initialState, action) {

    switch (action.type) {
        case INITIALIZED:
            return {...state, initialized: true}
    }

    return state;
}