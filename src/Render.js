import { renderFrontPage } from './pages/FrontPage/FrontPage.js';
import { renderSearchPage } from './pages/SearchPage/SearchPage.js';
import { renderGifPage } from './pages/GifPage/GifPage.js';

class Render {
    
    constructor(container, router, gifApi) {
        this.container = container;
        this.router = router;
        this.gifApi = gifApi;
        this.routerCallbackId = 0;
    }

    initialize = () => {
        this.router.initialize();
        this.routerCallbackId = this.router.subscribeForRouteChange(this.renderElements);
    };

    renderElements = (state, parameters) => {
        this.container.innerHTML = '';
        if (state === this.router.ROUTES.FRONT) { 
            renderFrontPage(this.router);
        } else if (state === this.router.ROUTES.SEARCH) {
            renderSearchPage(this.router, this.gifApi, parameters);
        } else if (state === this.router.ROUTES.GIF) {        
            renderGifPage(this.router, this.gifApi, parameters);
        }
    };
}

export default Render;