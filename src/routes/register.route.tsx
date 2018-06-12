import * as React from 'react';
import {Link, withRouter} from "react-router-dom";
import AuthenticationService from "../services/authentication.service";
import {connect} from "react-redux";
import {account} from "../store/actions/account/account.actions";

class RegisterRoute extends React.Component<any, any> {
    authenticationService = new AuthenticationService();

    constructor(props) {
        super(props);

        this.register = this.register.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.revalidate = this.revalidate.bind(this);
        this.show_error = this.show_error.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.account.user) {
            if(props.account.user.donation) {
                props.history.push('/account');
            }
            else {
                props.history.push('/donate');
            }
        }

        return {...state}
    }

    state = {
        submitted: false,
        submitting: false,
        errors: undefined,
        valid: true,
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

    componentDidMount() {
        (this.refs.firstName as HTMLElement).focus();
    }

    register(event) {
        event.preventDefault();

        this.setState({
            submitting: true,
            submitted: true
        });

        if (!this.revalidate(this.state.user,true)) {
            this.setState({
                submitting: false,
            });

            return;
        }

        this.authenticationService.register(this.state.user).then(success => {
            this.props.actions.account.get((user) => {
                if(user.donation) {
                    this.props.history.push('/account');
                }
                else {
                    this.props.history.push('/donate');
                }
            });
        }).catch(error => {
            this.setState({
                submitting: false
            })
        })
    }

    revalidate(user : any, force?) {
        if ((!this.state.submitted && !force) || !this.state.user) {
            return true;
        }

        let valid = true;
        let errors: any = {};

        if (!user.firstName || !user.firstName.length) {
            valid = false;
            errors.firstName = "This field is required";
        }

        if (!user.lastName || !user.lastName.length) {
            valid = false;
            errors.lastName = "This field is required";
        }

        if (!user.email || !user.email.length) {
            valid = false;
            errors.email = "This field is required";
        }

        if (!user.password || !user.password.length) {
            valid = false;
            errors.password = "This field is required";
        }

        if (!user.confirmPassword || !user.confirmPassword.length) {
            valid = false;
            errors.confirmPassword = "This field is required";
        }

        if (user.confirmPassword !== user.password) {
            valid = false;
            errors.confirmPassword = "The passwords provided do not match.";
        }

        if(user.email && !new RegExp(/^[A-z0-9\.\+]+@[A-z0-9]+(\.[A-z]+){1,5}$/).test(user.email)) {
            valid = false;
            errors.email = "The email provided is not valid.";
        }

        this.setState({
            valid,
            errors
        });

        return valid;
    }

    show_error(className, property) {
        if (this.state.valid || !this.state.submitted || !this.state.errors[property]) {
            return {}
        }

        return {
            className,
            error: this.state.errors[property]
        };
    }

    updateUser(value, property) {
        let user = {...this.state.user, [property]: value};

        this.setState({
            user
        });

        this.revalidate(user, false);
    }

    render() {
        return (
            <div>
                <h2 className="title">1. JOIN US TO TAKE PART</h2>
                <form className="grid-x" onSubmit={this.register}>
                    <div className="grid-container large-10 large-offset-1 cell">
                        <div className="grid-x grid-padding-x align-center">
                            <div className="cell medium-6">
                                <label className={this.show_error('is-invalid-label', 'firstName').className}>
                                    First Name
                                    <input id="firstName" ref="firstName" value={this.state.user.firstName}
                                           onChange={(e) => this.updateUser(e.target.value, 'firstName')} type="text"/>
                                    <div
                                        className={`form-error ${this.show_error('is-visible', 'firstName').className}`}>
                                        {this.show_error('is-visible', 'firstName').error}
                                    </div>
                                </label>
                            </div>
                            <div className="cell medium-6">
                                <label className={this.show_error('is-invalid-label', 'lastName').className}>
                                    Last Name
                                    <input id="lastName" value={this.state.user.lastName}
                                           onChange={(e) => this.updateUser(e.target.value, 'lastName')} type="text"/>
                                    <div
                                        className={`form-error ${this.show_error('is-visible', 'lastName').className}`}>
                                        {this.show_error('is-visible', 'lastName').error}
                                    </div>
                                </label>
                            </div>
                            <div className="cell">
                                <label className={this.show_error('is-invalid-label', 'email').className}>
                                    Email
                                    <input id="email" value={this.state.user.email}
                                           onChange={(e) => this.updateUser(e.target.value, 'email')} type="email"/>
                                    <div className={`form-error ${this.show_error('is-visible', 'email').className}`}>
                                        {this.show_error('is-visible', 'email').error}
                                    </div>
                                </label>
                            </div>
                            <div className="cell medium-6">
                                <label className={this.show_error('is-invalid-label', 'password').className}>
                                    Password
                                    <input id="password" value={this.state.user.password}
                                           onChange={(e) => this.updateUser(e.target.value, 'password')}
                                           type="password"/>
                                    <div
                                        className={`form-error ${this.show_error('is-visible', 'password').className}`}>
                                        {this.show_error('is-visible', 'password').error}
                                    </div>
                                </label>
                            </div>
                            <div className="cell medium-6">
                                <label className={this.show_error('is-invalid-label', 'confirmPassword').className}>
                                    Confirm
                                    <input id="confirmPassword" value={this.state.user.confirmPassword}
                                           onChange={(e) => this.updateUser(e.target.value, 'confirmPassword')}
                                           type="password"/>
                                    <div
                                        className={`form-error ${this.show_error('is-visible', 'confirmPassword').className}`}>
                                        {this.show_error('is-visible', 'confirmPassword').error}
                                    </div>
                                </label>
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
