import * as React from "react";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Navigation extends React.Component<any, any> {
    state = {};

    render() {
        let routes = [
            {title: 'Home', path: '/', exact: true},
            {title: 'Teams', path: '/teams'},
            {title: 'Standings', path: '/standings'},
            {title: 'Matches', path: '/matches'},
            {title: 'Charity', path: '/charity'},
            {title: 'Account', path: (this.props.account.user ? '/account' : '/account/login')}
        ];

        return (
            <nav className="grid-x">
                <div
                    className="medium-10 medium-offset-1 large-8 large-offset-2 small-10 small-offset-1 grid-x hide-for-small-only">
                    {routes.map(route => (
                        <NavLink exact={route.exact} className="link cell small-2 align-center flex-container"
                                 to={route.path} key={route.path}>
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