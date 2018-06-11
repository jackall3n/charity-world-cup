import {
    CLIENTS_RECEIVED,
    CLIENTS_REQUEST,
    CLIENT_DETAILS_RECEIVED,
    CLIENT_ACCOUNT_SUMMARIES_RECEIVED,
    CLIENT_ACCOUNT_SUMMARIES_REQUESTED,
    CLIENT_DETAILS_REQUESTED,
    CLIENT_TRANSACTIONS_REQUESTED,
    CLIENT_TRANSACTIONS_RECEIVED
} from "../../actions/clients/clients.action-types";

import {
    INSTRUCTIONS_REQUESTED,
    INSTRUCTIONS_RECEIVED
} from "../../actions/instructions/instructions.action-types";

const initialState = {};

function mapClients(clients) {
    let clientsState = {};

    for (let client of clients) {
        clientsState[client.id] = client;
    }

    return clientsState;
}

export default function (state = initialState, action) {

    switch (action.type) {
        case CLIENTS_RECEIVED:
            return {...state, ...mapClients(action.clients) }

        case CLIENT_DETAILS_REQUESTED:
            return {...state, [action.clientId] : {...state[action.clientId], details_requested: true } }

        case CLIENT_DETAILS_RECEIVED:
            return {...state, [action.clientId] : {...state[action.clientId], details: action.details} }

        case CLIENT_ACCOUNT_SUMMARIES_REQUESTED:
            return {...state, [action.clientId] : {...state[action.clientId], accounts_requested: true } }

        case CLIENT_ACCOUNT_SUMMARIES_RECEIVED:
            return {...state, [action.clientId] : {...state[action.clientId], accounts: action.accounts} }

        case CLIENT_TRANSACTIONS_REQUESTED:
            return {...state, [action.clientId] : {...state[action.clientId], transactions_requested: true } }

        case CLIENT_TRANSACTIONS_RECEIVED:
            return {...state, [action.clientId] : {...state[action.clientId], transactions: action.transactions} }

        case INSTRUCTIONS_REQUESTED:
            return {...state, [action.clientId] : {...state[action.clientId], instructions_requested: true } }

        case INSTRUCTIONS_RECEIVED:
            return {...state, [action.clientId] : {...state[action.clientId], instructions: action.instructions} }
    }

    return state;
}
