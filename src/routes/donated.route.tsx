import * as React from 'react';
import {Route, Switch, withRouter} from "react-router";
import {connect} from "react-redux";


class DonatedRoute extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    state = {
    }


    render() {
        return (
            <div>
                <h2 className="title">3. </h2>
            </div>
        )
    }
}

const mapState = state => {
    return {
        app: state.app,
        account: state.account
    }
};

const mapDispatch = dispatch => {
    return {}
};

export default withRouter<any>(connect(mapState, mapDispatch)(DonatedRoute));