import * as React from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

class HomeRoute extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className="grid-x align-center">
                    <h2 className="lato intro">DONATE TO TAKE PART IN THE 2018 FIFA WORLD CUP SWEEPSTAKE AND GET A CHANCE TO WIN A 4* NIGHT IN LONDON FOR TWO!</h2>
                    <h5 className="lato sub-intro">100% of donations go to <a href="http://www.ptsdresolution.org/" target="_blank">ptsdresolution.org</a>.</h5>
                    <Link to={"/account/register"} className="button medium-3">JOIN IN</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeRoute);