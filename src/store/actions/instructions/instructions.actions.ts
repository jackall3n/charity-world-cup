import {
    INSTRUCTIONS_REQUESTED,
    INSTRUCTIONS_RECEIVED
} from "./instructions.action-types";

import InstructionService from "../../../services/instruction.service";

function instructions_received(clientId, instructions) {
    return {
        type: INSTRUCTIONS_RECEIVED,
        clientId,
        instructions
    }
}

function instructions_requested(clientId) {
    return {
        type: INSTRUCTIONS_REQUESTED,
        clientId
    }
}

function get_instructions(clientId) {
    return dispatch => {
        dispatch(instructions_requested(clientId))
        return new InstructionService().getAll(clientId).then(instructions => {
            dispatch(instructions_received(clientId, instructions))
        })
    }
}

export const instructions = {
    get: get_instructions
};
