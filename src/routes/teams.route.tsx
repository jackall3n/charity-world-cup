import * as React from 'react';
import WorldCupService from "../services/world-cup.service";
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";


class TeamsRoute extends React.Component<RouteComponentProps<{}> & any, any> {
    render() {
        return (
            <div className="app-wrapper">
                <div className="groups grid-x grid-margin-x">
                    {this.props.teams.map(group => (
                        <div key={group._id} className="group cell large-6">
                            <h3 className="lato">Group {group.letter}</h3>
                            <div className="grid-x grid-margin-x teams">
                                {group.teams.map(team => (
                                    <div key={team._id} className="cell team medium-3 small-6">
                                        <div><img
                                            src={`https://api.fifa.com/api/v1/picture/flags-fwc2018-2/${team.code}`}/>
                                        </div>
                                        <span className="team-name">{team.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapState = state => {
    return {
        teams: state.teams
    }
};

const mapDispatch = dispatch => {
    return {}
};

export default withRouter<any>(connect<{}, {}, {}>(mapState, mapDispatch)(TeamsRoute));