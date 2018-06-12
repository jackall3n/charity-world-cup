import * as React from 'react';
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "../services/authentication.service";
import {ReactHTMLElement} from "react";
import {connect} from "react-redux";
import {account} from "../store/actions/account/account.actions";

class RegisterRoute extends React.Component<any, any> {
    authenticationService = new AuthenticationService();

    constructor(props) {
        super(props);

        this.register = this.register.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if(props.account.user) {
            props.history.push('/account');
        }

        return {...state}
    }

    state = {
        submitting: false,
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    componentDidMount(){
        (this.refs.firstName as HTMLElement).focus();
    }

    register(event){
        event.preventDefault();

        this.setState({
            submitting: true
        });

        this.authenticationService.register(this.state.user).then(success => {
            this.props.actions.account.get(() => {
                this.props.history.push('/account');
            });
        }).catch(error => {
            this.setState({
                submitting: false
            })
        })
    }

    updateUser(value, property) {
        this.setState({
            user: {...this.state.user, [property] : value }
        })
    }

    render() {
        return (
            <div>
                <h2 className="title">REGISTER AND TAKE PART</h2>
                <form className="grid-x" onSubmit={this.register}>
                    <div className="grid-container large-10 large-offset-1 cell">
                        <div className="grid-x grid-padding-x align-center">
                            <div className="cell medium-6">
                                <label>First Name<input id="firstName" ref="firstName" value={this.state.user.firstName} onChange={(e) => this.updateUser(e.target.value, 'firstName')} type="text"/></label>
                            </div>
                            <div className="cell medium-6">
                                <label>Last Name<input id="lastName" value={this.state.user.lastName} onChange={(e) => this.updateUser(e.target.value, 'lastName')}  type="text"/></label>
                            </div>
                            <div className="cell">
                                <label>Email<input id="email" value={this.state.user.email} onChange={(e) => this.updateUser(e.target.value, 'email')}  type="email"/></label>
                            </div>
                            <div className="cell medium-6">
                                <label>Password<input id="password" value={this.state.user.password} onChange={(e) => this.updateUser(e.target.value, 'password')}  type="password"/></label>
                            </div>
                            <div className="cell medium-6">
                                <label>Confirm<input id="confirmPassword" value={this.state.user.confirmPassword} onChange={(e) => this.updateUser(e.target.value, 'confirmPassword')}  type="password"/></label>
                            </div>
                            <div className="cell text-center actions">
                                <button className="button" disabled={this.state.submitting}>LET'S GO</button>
                            </div>
                            <div className="cell text-center">
                                <Link to={"/account/login"}>or, Login</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapState = state => {
    return {
        account: state.account
    }
};

const mapDispatch = dispatch => {
    return {
        actions: {
            account: {
                get: (cb) => dispatch(account.get(cb))
            }
        }
    }
};

export default withRouter<any>(connect<{}, {}, {}>(mapState, mapDispatch)(RegisterRoute));
