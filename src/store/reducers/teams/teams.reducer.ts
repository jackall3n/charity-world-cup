import {TEAMS_RECEIVED} from "../../actions/teams/teams.action-types";

const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {
        case TEAMS_RECEIVED:
            return action.teams
    }

    return state;
}