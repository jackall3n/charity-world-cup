import * as React from 'react';
import AuthenticationService from "../services/authentication.service";
import {withRouter} from "react-router";
import AccessTokenService from "../services/access-token.service";

class AuthRoute extends React.Component<any, any> {
    authenticationService = new AuthenticationService();
    accessTokenService = new AccessTokenService();

    query(search: string) : any {
        let params = {};

        search = search.substr(1);

        search.split('&').map(param => {
            let comps = param.split('=');

            params[comps[0]] = decodeURIComponent(comps[1]);
        });

        return params;
    }

    componentWillMount() {
        console.log(this.props);

        let client_id = 'b96e2b38e4cb42cab28d38af2b8b73fd';

        window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${encodeURIComponent(window.location.href)}&scope=playlist-read-private`
    }

    render() {
        return (
            <div>Auth hurrr</div>
        )
    }
}

export default withRouter(AuthRoute);