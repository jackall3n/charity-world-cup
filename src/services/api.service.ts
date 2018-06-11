import axios, {AxiosError} from "axios";
import AccessTokenService from './access-token.service'

interface IRequestOptions {
    url?: string;
    baseURL?: string;
    headers?: {[key: string] : string};
    body?: any;
    authorise?: boolean;
}

class ApiService {
    accessTokenService = new AccessTokenService();

    constructor(private _options?: IRequestOptions) {
        this._options = this._options || {}
    }

    get<T>(options: IRequestOptions) : Promise<T> {
        return this.request('get', options);
    }

    post<T>(options: IRequestOptions) : Promise<T> {
        return this.request('post', options);
    }

    request<T>(method: string, options: IRequestOptions) : Promise<T> {
        let request_options = {...this._options, ...options};

        let headers = {
            // Authorization: `Bearer ${this.accessTokenService.get()}`
        };

        return new Promise((resolve, reject) => {
            axios.request({
                method,
                baseURL: request_options.baseURL,
                url: request_options.url,
                headers,
                data: request_options.body
            }).then(response => {              
                resolve(response.data)
            }).catch((error: AxiosError) => {
                if(error.response && error.response.status === 401) {
                    console.log("no auth");
                    window.location.pathname = "/auth";
                }

                reject(error);
            })
        });
    }
}

export default ApiService;