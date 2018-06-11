import ApiService from './api.service'
import AccessTokenService from './access-token.service'

const ACCESS_TOKEN_KEY = 'access_token'

class AuthenticationService {
    accessTokenService = new AccessTokenService(); 

    private apiService = new ApiService({
        baseURL: '/gateway/aws/api/v1'
    });

    generateToken() : Promise<{ account: any, token: string }> {
        return this.apiService.post<any>({url: 'aws-login/generate' }).then(data => {
            this.accessTokenService.set(data.accessToken);

            return { 
                token: data.accessToken,
                account: data.userContext
            }
        })
    }
}

export default AuthenticationService;