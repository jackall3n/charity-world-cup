import * as React from "react";
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import "./app.scss";
import {app} from "../store/actions/app/app.actions";

import AccountIndexRoute from "../routes/account-index.route";
import TeamsRoute from "../routes/teams.route";
import HomeRoute from "../routes/home.route";
import Header from "./header";
import Navigation from "./navigation";
import CharityRoute from "../routes/charity.route";
import StandingsRoute from "../routes/standings.route";
import MatchesRoute from "../routes/matches.route";
import DonateRoute from "../routes/donate.route";
import DonatedRoute from "../routes/donated.route";
import HowToPlayRoute from '../routes/how-to-play.route';

class App extends React.Component<any, any> {

    componentWillMount() {
        this.props.actions.app.initialize();
    }

    render() {
        if(!this.props.app.initialized) {
            return <div/>
        }

        return (
            <Router>
                <div>
                    <div className="header-wrapper">
                        <div className="cover"/>
                        <Header/>
                        <Navigation/>
                    </div>
                    <div className="grid-x">
                        <div className="medium-10 medium-offset-1 large-8 large-offset-2 small-10 small-offset-1">
                            <Switch>
                                <Route path={"/account"} component={AccountIndexRoute}/>
                                <Route path={"/teams"} component={TeamsRoute}/>
                                <Route path={"/charity"} component={CharityRoute}/>
                                <Route path={"/standings"} component={StandingsRoute}/>
                                <Route path={"/matches"} component={MatchesRoute}/>
                                <Route path={"/donate"} exact component={DonateRoute}/>
                                <Route path={"/how-to-play"} component={HowToPlayRoute}/>
                                <Route path={"/donate/success"} component={DonatedRoute}/>
                                <Route path={"/"} component={HomeRoute}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateFromProps = state => {
    return {
        app: state.app
    }
};

const mapDispatchFromProps = dispatch => {
    return {
        actions: {
            app: {
                initialize: () => dispatch(app.initialize())
            }
        }
    }
};

export default connect(mapStateFromProps, mapDispatchFromProps)(App);
