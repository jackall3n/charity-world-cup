import * as React from 'react';
import {Route, Switch, withRouter} from "react-router";
import {connect} from "react-redux";

class CharityRoute extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h2 className="title">SUSSEX PTSD FUND</h2>
            </div>
        )
    }
}

export default CharityRoute;