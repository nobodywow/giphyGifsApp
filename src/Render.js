import { renderFrontPage } from './pages/FrontPage/FrontPage.js';
import { renderSearchPage } from './pages/SearchPage/SearchPage.js';
import { renderGifPage } from './pages/GifPage/GifPage.js';
import { routesMap } from '../src/cfg/router.config.js';

class Render {
    
    constructor(container, router, gifApi) {
        this.container = container;
        this.router = router;
        this.gifApi = gifApi;
        this.routerCallbackId = 0;
    }

    initialize = () => {
        this.routerCallbackId = this.router.subscribeForRouteChange(this.renderElements);
    };

    renderElements = (routeName, parameters) => {
        this.container.innerHTML = '';
        if (routeName === routesMap.front) { 
            renderFrontPage(this.router, routesMap);
        } else if (routeName === routesMap.search) {
            renderSearchPage(this.router, this.gifApi, parameters, routesMap);
        } else if (routeName === routesMap.gif) {        
            renderGifPage(this.router, this.gifApi, parameters, routesMap);
        }
    };
}

export default Render;