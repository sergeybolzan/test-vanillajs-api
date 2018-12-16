class AppController extends NewsApiLoader {
    getSources(callback) {
        super.getResp({
            endpoint: 'sources'
        }, callback);
    }

    getNews(e, callback) {
        if (e.target.classList.contains('source__item')) {
            super.getResp({
                endpoint: 'everything',
                options: { sources: e.target.dataset.sourceId }
            }, callback);
        }
    }
}