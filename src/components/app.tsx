import * as React from "react";
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "./app.scss";
import AuthRoute from "../routes/auth.route";
import TracksRoute from "../routes/tracks.route";

class App extends React.Component<any, any> {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/auth"} component={AuthRoute}/>
                    <Route path={"/"} component={TracksRoute}/>
                </Switch>
            </Router>
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
