import ApiService from './api.service'
import Team from "../models/team";
import Group from "../models/group";

class WorldCupService {

    private apiService = new ApiService({
        baseURL: 'https://charity-world-cup-api.herokuapp.com'
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
}

export default WorldCupService;