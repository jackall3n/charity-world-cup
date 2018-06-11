import app from "./app/app.reducer";
import navigation from "./navigation/navigation.reducer";
import account from "./account/account.reducer";
import messages from "./messages/messages.reducer";
import clients from "./clients/clients.reducer";
import {combineReducers} from "redux";

export default combineReducers({
    app,
    account,
    navigation,
    messages,
    clients
})
