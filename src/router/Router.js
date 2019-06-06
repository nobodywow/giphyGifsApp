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

    initialize = () => {
        this.addNavigationButtonsListener();
        this.currentRoute = this.detectCurrentRoute();
    };

    detectCurrentRoute = () => {
        let pathNameSuffix = this.getPathname();
        if (pathNameSuffix.indexOf(this.ROUTES.SEARCH) === 0) {
            return this.ROUTES.SEARCH;
        }
        if (pathNameSuffix.indexOf(this.ROUTES.GIF) === 0) {
            return this.ROUTES.GIF;
        }
        if (pathNameSuffix === '') {
            return this.ROUTES.FRONT;
        }
        return null;
    };

    subscribeForRouteChange = (callback) => {
        this.routeCallbacks.push(callback);
        return ++this.callbackCounter;
    };

    unsubscribeFromRouteChange = (id) => {
        this.routeCallbacks[id] = null;
    };

    notifySubscribers = () => {
        this.currentRoute = this.detectCurrentRoute();
        this.routeCallbacks.forEach((item) => {
            if (typeof item === 'function') {
                item(this.currentRoute);
            }
        });
    };

    navigate = (nextRoute, parameters) => {
        this.navigateTo(this.composeRoutePathname(nextRoute, parameters));
        this.currentRoute = nextRoute;
        this.routeCallbacks.forEach((item) => {
            if (typeof item === 'function') {
                item(this.currentRoute, parameters);
            }
        });
    };

    composeRoutePathname = (nextRoute, parameters) => {
        let pathQuery = '';
        if (nextRoute === this.ROUTES.SEARCH) {
            pathQuery = `${this.ROUTES.SEARCH}?q=${parameters}`;
        } else if (nextRoute === this.ROUTES.GIF) {
            pathQuery = `${this.ROUTES.GIF}/${parameters}`;
        } else if (nextRoute === this.ROUTES.FRONT) {
            pathQuery = '';
        }
        return pathQuery;
    };

    linkWrapper = (nextRoute, parameters) => {
        let linkWrapper = document.createElement('a');
        linkWrapper.href = this.generateHref(nextRoute, parameters);
        linkWrapper.onclick = (event) => {
            event.preventDefault();
            this.navigate(nextRoute, parameters);
        };
        return linkWrapper;
    };
}

export default Router;
