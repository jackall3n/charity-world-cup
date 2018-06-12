import LocalStorageService from './local-storage.service'

const ACCESS_TOKEN_KEY = 'access_token';

class AccessTokenService {
    localStorageService = new LocalStorageService(); 

    get() : string {
        return this.localStorageService.get(ACCESS_TOKEN_KEY);
    }

    set(token: string) {
        this.localStorageService.set(ACCESS_TOKEN_KEY, token);
    }

    clear() {
        this.set('');
    }
}

export default AccessTokenService;