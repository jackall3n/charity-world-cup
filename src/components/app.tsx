import * as React from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./app.scss";
import AuthRoute from "../routes/auth.route";
import TeamsRoute from "../routes/teams.route";

class App extends React.Component<any, any> {

    render() {
        return (
            <div>
                <header className="grid-x">
                    <div className="medium-10 medium-offset-1 large-8 large-offset-2 small-10 small-offset-1">
                        <h1>Charity FIFA World Cup 2018</h1>
                    </div>
                </header>
                <div className="grid-x">
                    <div className="medium-10 medium-offset-1 large-8 large-offset-2 small-10 small-offset-1">
                        <Router>
                            <Switch>
                                <Route path={"/auth"} component={AuthRoute}/>
                                <Route path={"/"} component={TeamsRoute}/>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateFromProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchFromProps = () => {
    return {}
};

export default connect(mapStateFromProps, mapDispatchFromProps)(App);
