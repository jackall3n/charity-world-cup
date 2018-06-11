import {
    CLIENTS_RECEIVED, 
    CLIENTS_REQUEST, 
    CLIENT_DETAILS_RECEIVED, 
    CLIENT_ACCOUNT_SUMMARIES_RECEIVED,
    CLIENT_ACCOUNT_SUMMARIES_REQUESTED, 
    CLIENT_DETAILS_REQUESTED,
    CLIENT_TRANSACTIONS_REQUESTED,
    CLIENT_TRANSACTIONS_RECEIVED
} from "./clients.action-types";

import ClientsService from "../../../services/clients.service";

function clients_received(clients) {    
    return {
        type: CLIENTS_RECEIVED,
        clients
    }
}

function clients_request(callback?) {    
    return dispatch => {
        return new ClientsService().get().then(clients => {
            dispatch(clients_received(clients))
            callback && callback()
        })
    }
}

function account_details_received(clientId, details) {    
    return {
        type: CLIENT_DETAILS_RECEIVED,
        clientId,
        details
    }
}

function account_details_requested(clientId) {    
    return {
        type: CLIENT_DETAILS_REQUESTED,
        clientId
    }
}

function account_summaries_received(clientId, accounts) {    
    return {
        type: CLIENT_ACCOUNT_SUMMARIES_RECEIVED,
        clientId,
        accounts
    }
}

function transactions_received(clientId, transactions) {    
    return {
        type: CLIENT_TRANSACTIONS_RECEIVED,
        clientId,
        transactions
    }
}

function account_summaries_requested(clientId) {    
    return {
        type: CLIENT_ACCOUNT_SUMMARIES_REQUESTED,
        clientId
    }
}

function transactions_requested(clientId) {    
    return {
        type: CLIENT_TRANSACTIONS_REQUESTED,
        clientId
    }
}

function get_account_details(clientId) {    
    return dispatch => {
        dispatch(account_details_requested(clientId))
        return new ClientsService().getDetails(clientId).then(details => {
            dispatch(account_details_received(clientId, details))
        })
    }
}

function get_account_summary(clientId) {    
    return dispatch => {
        dispatch(account_summaries_requested(clientId))
        return new ClientsService().getAccountSummary(clientId).then(accounts => {
            dispatch(account_summaries_received(clientId, accounts))
        })
    }
}

function get_transactions(clientId) {    
    return dispatch => {
        dispatch(transactions_requested(clientId))
        return new ClientsService().getTransactions(clientId).then(accounts => {
            dispatch(transactions_received(clientId, accounts))
        })
    }
}

export const clients = {
    request: clients_request,
    received: clients_received,
    get_account_details: get_account_details,
    get_account_summary: get_account_summary,
    get_transactions: get_transactions
};