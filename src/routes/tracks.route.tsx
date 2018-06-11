import * as React from 'react';
import SpotifyService from "../services/spotify.service";
import * as moment from 'moment';
import {withRouter} from "react-router";
import AccessTokenService from "../services/access-token.service";

class TracksRoute extends React.Component<any, any> {
    spotifyService = new SpotifyService();
    accessTokenService = new AccessTokenService();

    state = {
        tracks: []
    };

    constructor(props) {
        super(props);


        this.loadTracks = this.loadTracks.bind(this);
    }

    componentWillMount() {
        if(window.location.hash) {
            let token = window.location.hash.replace('#access_token=', '');
            this.accessTokenService.set(token);
        }

        this.loadTracks();
    }

    loadTracks() {
        this.spotifyService.getTracks().then(tracks => {
            this.setState({
                tracks
            })
        }).catch(e => {


            let client_id = 'b96e2b38e4cb42cab28d38af2b8b73fd';

            window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${encodeURIComponent(window.location.href)}&scope=playlist-read-private`

            //this.props.history.push('/auth')
            //this.props.history.push('/auth')
        })
    }

    render() {
        let total_ms = 0;
        let start_time = moment(new Date(2000, 1, 1, 19, 15));

        return (
            <div className="app-wrapper">
                <br/>
                <button className="reload" onClick={this.loadTracks}>Reload</button>
                {this.state.tracks.map((song, index) => {
                    let track_time = start_time.clone().add(total_ms, 'ms');
                    total_ms += song.track.duration_ms;

                    return (<div key={index} className="grid-x">
                        <div className="cell small-1 small-offset-1">{track_time.format("hh:mm")}</div>
                        <div className="cell small-6">{song.track.name} <span style={{marginBottom: 5, fontSize: 12, 'color' : 'grey', display:'block'}}>{song.track.artists[0].name}</span></div>
                    </div>)
                })}
            </div>
        );
    }
}

export default withRouter(TracksRoute);