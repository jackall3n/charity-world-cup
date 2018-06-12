import * as React from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

class HomeRoute extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div className="grid-x align-center">
                    <h2 className="lato intro">RAISE MONEY AND TAKE PART IN THE CHARITY FIFA WORLD CUP SWEEPSTAKE WITH <span
                        style={{color: '#577b98'}}>ANY</span> DONATION!</h2>
                    <h5 className="lato sub-intro">100% of all donations go to the <Link to="/charity">Sussex PTSD Fund</Link></h5>
                    <Link to={"/account/register"} className="button medium-3">JOIN IN</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(HomeRoute);