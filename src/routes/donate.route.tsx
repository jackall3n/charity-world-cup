import * as React from 'react';
import {Route, Switch, withRouter} from "react-router";
import {connect} from "react-redux";
import AccessTokenService from "../services/access-token.service";

import * as NumberFormat from 'react-number-format';

class DonateRoute extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.goToLink = this.goToLink.bind(this);
    }

    state = {
        email: 'jack',
        amount: 10
    }

    componentWillMount() {
        if (!this.props.account.user && this.props.app.initialized) {
            this.props.history.push('/account/register')
        }
    }

    goToLink(e) {
        e.preventDefault();
        
        let ref = "f34nfinw3f";
        let link = `http://link.justgiving.com/v1/fundraisingpage/donate/pageId/11061725`;

        let q = {
            amount: this.state.amount,
            reference: ref,
            currency: 'GBP',
            exitUrl: `https://localhost:9000/ref?=${ref}&jgDonationId=JUSTGIVING-DONATION-ID`
        }

        let params = [];

        for(let p in q) {
            let v = encodeURIComponent(q[p]);
            params.push(`${p}=${v}`);
        }

        window.location.href = `${link}?${params.join('&')}`;
    }

    render() {
        return (
            <div>
                <h2 className="title">2. DONATE TO PLAY</h2>
                <form className="grid-x align-center" onSubmit={this.goToLink}>
                    <div className="grid-container large-4 large-offset-4 cell">
                        <div className="cell">
                            <label>
                                Enter amount:
                                <NumberFormat value={this.state.amount} thousandSeparator={true} prefix={'£'} onValueChange={(values) => {this.setState({amount: values.value})}}/>
                            </label>
                        </div>
                        <button className="cell button">Donate <NumberFormat thousandSeparator={true} prefix={'£'} displayType={'text'} value={this.state.amount}/></button>
                    </div>
                    <p className="text-center account-help">You will be redirected to JustGiving.com in order to donate.</p>
                    
                </form>
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

export default withRouter<any>(connect(mapState, mapDispatch)(DonateRoute));