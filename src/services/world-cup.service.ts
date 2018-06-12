import ApiService from './api.service'
import Team from "../models/team";
import Group from "../models/group";
import apiConfiguration from '../configurations/api';

class WorldCupService {

    private apiService = new ApiService({
        baseURL: apiConfiguration.url
    });

    getTeams() : Promise<Team[]> {
        let url = `teams`;

        return this.apiService.get<any>({
            url
        })
    }

    getGroups() : Promise<Group[]> {
        let url = `groups`;

        return this.apiService.get<any>({
            url
        })
    }

    saveDonation(donation) {
        return this.apiService.post<any>({
            url: 'donations/save',
            body: donation,
            authorise: true
        })
    }
}

export default WorldCupService;