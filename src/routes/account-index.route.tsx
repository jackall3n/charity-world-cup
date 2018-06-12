import * as React from 'react';
import {Route, Switch, withRouter} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import RegisterRoute from "./register.route";
import AccountRoute from "./account.route";
import LoginRoute from "./login.route";

class AccountIndexRoute extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path={"/account/login"} component={LoginRoute}/>
                        <Route path={"/account/register"} component={RegisterRoute}/>
                        <Route path={"/account"} exact component={AccountRoute}/>
                    </Switch>
                    <p className="text-center account-help">If you're having any issues with your account, please email <a
                        href="mailto:me@jackallen.me">me@jackallen.me</a>.</p>
                </div>
            </Router>
        )
    }
}

export default withRouter(AccountIndexRoute);