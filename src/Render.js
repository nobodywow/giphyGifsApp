import { renderFrontPage } from './pages/FrontPage/FrontPage.js';
import { renderSearchPage } from './pages/SearchPage/SearchPage.js';
import { renderGifPage } from './pages/GifPage/GifPage.js';

class Render {
    
    constructor(container, router, dataService) {
        this.container = container;
        this.router = router;
        this.dataService = dataService;
        this.routerCallbackId = 0;
    }

    initialize = () => {
        this.router.initialize();
        this.routerCallbackId = this.router.subscribeForRouteChange(this.renderElements);
    };

    renderElements = (state) => {
        this.container.innerHTML = '';
        if (state === this.router.ROUTES.FRONT) { 
            renderFrontPage(this.router);
        } else if (state === this.router.ROUTES.SEARCH) {
            renderSearchPage(this.router, this.dataService);
        } else if (state === this.router.ROUTES.GIF) {        
            renderGifPage(this.router, this.dataService);
        }
    };
}

export default Render;