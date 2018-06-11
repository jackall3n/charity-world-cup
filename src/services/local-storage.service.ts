class LocalStorageService {
    get(key: string) {
        let value = window.localStorage[key];
        if(!value) {
            return value;
        }

        return JSON.parse(value);
    }

    set(key: string, value: any) {
        window.localStorage[key] = JSON.stringify(value);
    }
}

export default LocalStorageService