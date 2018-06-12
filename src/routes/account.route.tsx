import * as React from 'react';
import {Route, Switch, withRouter} from "react-router";
import {connect} from "react-redux";
import AccessTokenService from "../services/access-token.service";
import * as moment from 'moment';

class AccountRoute extends React.Component<any, any> {
    accessTokenService = new AccessTokenService();

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        if (!this.props.account.user && this.props.app.initialized) {
            this.props.history.push('/account/login')
        }
    }

    logout() {
        this.accessTokenService.clear();
        window.location.reload();
    }

    render() {
        if (!this.props.account.user) {
            return (<div/>);
        }

        let donation = this.props.account.user.donation;

        return (
            <div>
                <h2 className="title">HELLO, {this.props.account.user.name.first}</h2>
                <div className="grid-x align-center grid-margin-y">
                    {donation && (
                        <p className="cell text-center">Donation received at {moment(donation.created).format("DD MMMM HH:mm")}.<br/><br/></p>
                    )}
                    <button className="button" onClick={this.logout}>Log out</button>
                </div>
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

export default withRouter<any>(connect(mapState, mapDispatch)(AccountRoute));