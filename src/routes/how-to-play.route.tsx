import * as React from 'react';
import {Route, Switch, withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";

class HowToPlay extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h2 className="title">But, How?</h2>
                <div className="instructions">
                    <ol>
                        <li>Go to the <Link to="/donate">Donate</Link> page.</li>
                        <li>If you haven't already, register for a completely free account.</li>
                        <li>Donate anything from £2 to £100,000. 100% of donations go to <Link to="http://www.ptsdresolution.org/" target="_blank">ptsdresolution.org</Link>.</li>
                        <li>That's it!</li>
                        <li><strong>Who wins?</strong> On Thursday 14th June at 15:30, entry will be closed and everyone will be randomly assigned a team. This team will be emailed to you, or you will be able to view it on your <Link to="/account">Account</Link>. All participants with the winning team will enter a draw, where 1 winner will be chosen at random.</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default HowToPlay;