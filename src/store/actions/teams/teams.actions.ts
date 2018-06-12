import {TEAMS_RECEIVED} from "./teams.action-types";
import WorldCupService from "../../../services/world-cup.service";

function teams_received(teams) {
    return {
        type: TEAMS_RECEIVED,
        teams
    }
}

function request_teams() {
    return dispatch => {
        return new WorldCupService().getGroups().then(groups => {
            dispatch(teams_received(groups))
        })
    }
}

export const teams = {
    request: request_teams
};