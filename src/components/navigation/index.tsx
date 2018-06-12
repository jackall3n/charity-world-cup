import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Navigation extends React.Component<any, any> {
    state = {};

    render() {
        let routes = [
            {title: 'Home', path: '/', exact: true},
            {title: 'How to Play', path: '/how-to-play'},
            {title: 'Account', path: /*(this.props.account.user ? */'/account'/* : '/account/login')*/},
            {title: 'Donate', path: '/donate'},
            {title: 'Teams', path: '/teams'},
            {title: 'The Charity', path: 'http://www.ptsdresolution.org/', target: '_blank'}
        ];

        return (
            <nav className="grid-x">
                <div className="medium-10 medium-offset-1 large-8 large-offset-2 small-10 small-offset-1 grid-x">
                    {routes.map(route => (
                        <NavLink exact={route.exact} className="link cell medium-2 align-center flex-container"
                                 to={route.path} key={route.path} target={route.target}>
                            <span className="link-text">{route.title}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        )
    }
}

let mapState = state => {
    return {
        account: state.account
    }
};

let mapDispatch = dispatch => {
    return {}
};

export default withRouter<any>(connect<any, any>(mapState, mapDispatch)(Navigation))