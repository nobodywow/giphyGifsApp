import { renderFrontPage } from './src/pages/FrontPage/FrontPage.js';
import { renderSearchPage } from './src/pages/SearchPage/SearchPage.js';
import { renderGifPage } from './src/pages/GifPage/GifPage.js';

class Render {
    
    constructor(API, router, dataHandler) {
        this.gifAPI = API;
        this.router = router;
        this.dataHandler = dataHandler;
        this.callbackId = 0;
    }

    initialize = () => {
        this.router.initializeRouter();
        this.callbackId = this.router.subscribeForRouteChange(this.renderElements);
    };

    renderElements = async (state) => {
        if (state === this.router.ROUTES.FRONT) { 
            renderFrontPage(this.router, this.dataHandler);
        } else if (state === this.router.ROUTES.SEARCH) {
            renderSearchPage(this.router, this.dataHandler);
        } else if (state === this.router.ROUTES.GIF) {        
            renderGifPage(this.router, this.dataHandler);
        }
    };
}

export default Render;