import ApiService from './api.service'

class SpotifyService {

    private apiService = new ApiService({
        baseURL: 'https://api.spotify.com/v1'
    });

    getTracks() : Promise<any[]> {
        let user_id = 'allooon';
        let playlist_id = '1fkwDDKbjs0sR1KGWLaF3U';
        let url = `users/${user_id}/playlists/${playlist_id}/tracks`;

        return this.apiService.get<any>({
            url
        }).then(response => {
            return response.items;
        })
    }
}

export default SpotifyService;