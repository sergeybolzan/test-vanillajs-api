class NewsApiLoader {
    constructor() {
        this.baseLink = 'https://newsapi.org/v2/';
        this.settings = {
            apiKey: '76b0644a74d74c5bbf0aa8ac6fc771b2'
        };
    }

    makeUrl(options, endpoint) {
        const urlOptions = { ...this.settings, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        for (let option in urlOptions) {
            url += `${option}=${urlOptions[option]}&`;
        }
        return url.slice(0, -1);
    }

    getResp({ endpoint, options = {} }, callback) {
        fetch(this.makeUrl(options, endpoint))
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error(error.message));
    }
}