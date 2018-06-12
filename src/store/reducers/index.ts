import account from "./account/account.reducer";
import app from "./app/app.reducer";
import teams from "./teams/teams.reducer";
import {combineReducers} from "redux";

export default combineReducers({
    app,
    account,
    teams
})
