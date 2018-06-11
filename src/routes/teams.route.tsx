import * as React from 'react';
import WorldCupService from "../services/world-cup.service";
import * as moment from 'moment';
import {withRouter} from "react-router";
import AccessTokenService from "../services/access-token.service";
import Team from "../models/team";

class TeamsRoute extends React.Component<any, any> {
    worldCupService = new WorldCupService();

    state = {
        groups: []
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.worldCupService.getGroups().then(groups => {
            this.setState({
                groups
            })
        })
    }

    render() {

        return (
            <div className="app-wrapper">
                <div className="groups">
                    {this.state.groups.map(group => (
                        <div key={group._id} className="group">
                            <h3>Group {group.letter}</h3>
                            <div className="grid-x grid-margin-x teams">
                                {group.teams.map(team => (
                                    <div key={team._id} className="cell team medium-3 small-6">
                                        <span>{team.name}</span>
                                        <div><img
                                            src={`https://api.fifa.com/api/v1/picture/flags-fwc2018-5/${team.code}`}/>
                                        </div>
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

export default withRouter(TeamsRoute);