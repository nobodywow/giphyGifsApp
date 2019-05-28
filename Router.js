import { env } from './env.js';

const PAGE_URLS = {
    FRONT: 'front',
    SEARCH: 'search',
    GIF: 'gif',
};

class Router {

    constructor() {
        this.routeChange = [];
    }
    
    detectCurrentPage = () => {
        let url = window.location.href;        
        if (url.split('/').pop().indexOf('search') === 0) {
            return env.SEARCH_PAGE;
        } else if (url.split('/').slice(-2)[0].indexOf('gif') === 0) {
            return env.GIF_PAGE;            
        } else {
            return env.FRONT_PAGE;
        }        
    };

    routeChanged = (callback) => {
        this.routeChange.push(callback);
    }

    changeRoute = (callback, whichPage, queryInfo) => {
        if (!queryInfo || !whichPage) {
            callback();
            return;
        }
        if (whichPage === PAGE_URLS.SEARCH) {
            let pathQuery = `search?q=${queryInfo}`;
            this.navigateTo(pathQuery);
            callback();
        } else if (whichPage === PAGE_URLS.GIF) {
            let pathQuery = `gif/${queryInfo}`;
            this.navigateTo(pathQuery);
            callback();
        } else if (whichPage === PAGE_URLS.FRONT) {
            this.navigateTo('');
            callback();
        }
        this.routeChange.forEach((item) => item());
    };
}

export default Router;