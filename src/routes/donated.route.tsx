import * as React from 'react';
import {Route, Switch, withRouter} from "react-router";
import {connect} from "react-redux";
import WorldCupService from 'services/world-cup.service';


class DonatedRoute extends React.Component<any, any> {
    worldCupService = new WorldCupService();

    constructor(props) {
        super(props);
    }

    state = {
        errors: false,
        processing: true
    }

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    componentWillMount() {
        let reference = this.getParameterByName('ref', this.props.location.search);
        let donation_id = this.getParameterByName('jgDonationId', this.props.location.search);
        
        this.worldCupService.saveDonation({
            reference,
            donation_id
        }).then(() => {
            this.setState({
                processing: false,
                errors: false
            })
        }).catch(() => {
            this.setState({
                processing: false,
                errors: true
            });
        });
    }

    render() {
        if(this.state.processing) {
            return (
                <p className="text-center"><br/><br/>Processing your donation...</p>
            )
        }

        if(this.state.errors) {
            return (
                <div>
                <h2 className="title">OH NO!</h2>
                <p className="text-center">
                Something happened while trying to process your donation!
                <br/>
                <br/>
                Please quote <code>{this.getParameterByName('ref', this.props.location.search)}-{this.getParameterByName('jgDonationId', this.props.location.search)}</code> to <a href="mailto:me@jackallen.me">me@jackallen.me</a>.
                </p>
            </div>
            )
        }

        return (
            <div>
                <h2 className="title">3. SUCCESS!</h2>
                <p className="text-center">
                Your donation appears to have been successful!
                <br/>You'll receive your randomly chosen team 30 minutes prior to the first World Cup game (14th June at 15:30 GMT).
                <br/><br/>Good luck!</p>
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