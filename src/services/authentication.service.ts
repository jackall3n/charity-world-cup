import ApiService from './api.service'
import AccessTokenService from './access-token.service'


class AuthenticationService {
    accessTokenService = new AccessTokenService(); 

    private apiService = new ApiService({
        //baseURL: 'http://localhost:5000'
        baseURL: 'https://charity-world-cup-api.herokuapp.com'
    });

    login(email: string, password: string) : Promise<boolean> {
        return this.apiService.post<any>({url: 'auth/login', body: {email, password} }).then(data => {
            this.accessTokenService.set(data.token);
            return data
        })
    }

    register(user: any) : Promise<boolean> {
        return this.apiService.post<any>({url: 'auth/register', body: user }).then(data => {
            this.accessTokenService.set(data.token);

            return data
        })
    }

    me() : Promise<boolean> {
        return this.apiService.get<any>({url: 'me', authorise: true}).then(me => {
           return me;
        });
    }
}

export default AuthenticationService;