import * as React from 'react';
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "../services/authentication.service";
import {connect} from "react-redux";
import {account} from "../store/actions/account/account.actions";

class LoginRoute extends React.Component<any, any> {
    authenticationService = new AuthenticationService();

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.show_error = this.show_error.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.account.user) {
            props.history.push('/account');
        }

        return {...state}
    }

    state = {
        submitted: false,
        error: false,
        submitting: false,
        email: '',
        password: ''
    };

    login(event) {
        event.preventDefault();

        this.setState({
            submitted: true,
            submitting: true,
            error: false
        });

        this.authenticationService.login(this.state.email, this.state.password).then(() => {
            this.props.actions.account.get((user) => {
                if(user.donation) {
                    this.props.history.push('/account');
                }
                else {
                    this.props.history.push('/donate');
                }
            });
        }).catch(() => {
            this.setState({
                error: true,
                submitting: false
            });
        })
    }

    show_error(className) {
        return this.state.error && this.state.submitted ? className : null;
    }

    render() {
        return (
            <div>
                <h2 className="title">WELCOME BACK</h2>
                <form className="grid-x" onSubmit={this.login} data-abide noValidate={true}>
                    <div className="grid-container large-8 large-offset-2 cell">
                        <div className="grid-x grid-padding-x align-center">
                            <div className="cell">
                                <label className={this.show_error('is-invalid-label')}>
                                    Email
                                    <input value={this.state.email}
                                           onChange={e => this.setState({email: e.target.value})} id="email"
                                           type="text"/>
                                </label>
                            </div>
                            <div className="cell">
                                <label className={this.show_error('is-invalid-label')}>
                                    Password
                                    <input value={this.state.password}
                                           onChange={e => this.setState({password: e.target.value})}
                                           id="password" type="password"/>
                                    <div className={`form-error ${this.show_error('is-visible')}`}>
                                        Something didn't go well. Please try again, or contact <a
                                        href="mailto:me@jackallen.me">me@jackallen.me</a>.
                                    </div>
                                </label>
                            </div>
                            <div className="cell text-center actions">
                                <button className="button" disabled={this.state.submitting}>LOG IN</button>
                            </div>
                            <div className="cell text-center">
                                <Link to={"/account/register"}>or, Register</Link>
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

export default withRouter<any>(connect<{}, {}, {}>(mapState, mapDispatch)(LoginRoute));
