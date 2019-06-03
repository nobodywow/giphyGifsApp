class Router {

    constructor() {
        this.routeCallbacks = [];
        this.callbackCounter = 0;
        this.ROUTES = {
            FRONT: 'front',
            SEARCH: 'search',
            GIF: 'gif',
        };
        this.currentRoute = '';
    }

    initializeRouter = () => {
        this.backButtonListener();
        this.currentRoute = this.detectCurrentRoute();
    };
    
    detectCurrentRoute = () => {
        let pathNameSuffix = this.detectPathnameSuffix();
        if (pathNameSuffix.indexOf('search') === 0) {
            return this.ROUTES.SEARCH;
        } else if (pathNameSuffix.indexOf('gif') === 0) {
            return this.ROUTES.GIF;            
        } else {
            return this.ROUTES.FRONT;
        }        
    };

    subscribeForRouteChange = (callback) => {
        this.routeCallbacks.push(callback);
        return this.callbackCounter++;
    };

    unsubscribeFromRouteChange = (id) => {
        this.routeCallbacks[id] = null;
    };

    redirect = (nextRoute, queryInfo) => {
        if (!nextRoute) {
            this.currentRoute = this.detectCurrentRoute();
        } else {
            this.navigateTo(this.definePathUrl(nextRoute, queryInfo));
            this.currentRoute = nextRoute;
        }        
        this.routeCallbacks.forEach((item) => {
            if (typeof item === 'function') {
                item(this.currentRoute);
            }
        });
    };

    definePathUrl = (nextRoute, queryInfo) => {
        let pathQuery = '';
        if (nextRoute === this.ROUTES.SEARCH) {
            pathQuery = `${this.ROUTES.SEARCH}?q=${queryInfo}`;
        } else if (nextRoute === this.ROUTES.GIF) {
            pathQuery = `${this.ROUTES.GIF}/${queryInfo}`;
        } else if (nextRoute === this.ROUTES.FRONT) {
            pathQuery = '';
        }
        return pathQuery;
    };

    createLinkWrapper = (itemInfo, nextRoute) => {
        let linkWrapper = document.createElement('a');
        linkWrapper.href = this.generateInfoHref(itemInfo, nextRoute); 
        linkWrapper.onclick = (event) => {
            event.preventDefault();
            this.redirect(nextRoute, itemInfo);
        }; 
        return linkWrapper;
    };
}

export default Router;