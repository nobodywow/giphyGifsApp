class Router {
    
    constructor() {
        this.routeCallbacks = [];
        this.callbackCounter = 0;
        this.ROUTES = {
            FRONT: 'front',
            SEARCH: 'search',
            GIF: 'gif',
        };
    }

    initialize = () => {
        this.addNavigationButtonsListener();
    };

    getCurrentRoute = () => {
        let pathnameSuffix = this.getPathname();
        if (pathnameSuffix.indexOf(this.ROUTES.SEARCH + '?q') === 0) {
            return this.ROUTES.SEARCH;
        }
        if (pathnameSuffix === this.ROUTES.GIF) {
            return this.ROUTES.GIF;
        }
        if (pathnameSuffix === '') {
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
        this.routeCallbacks.forEach((item) => {
            if (typeof item === 'function') {
                item(this.getCurrentRoute());
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
        let pathname = '';
        if (nextRoute === this.ROUTES.SEARCH) {
            pathname = `${this.ROUTES.SEARCH}?q=${parameters}`;
        } else if (nextRoute === this.ROUTES.GIF) {
            pathname = `${this.ROUTES.GIF}/${parameters}`;
        } else if (nextRoute === this.ROUTES.FRONT) {
            pathname = '';
        }
        return pathname;
    };

    createLinkWrapper = (nextRoute, parameters) => {
        let createLinkWrapper = document.createElement('a');
        createLinkWrapper.href = this.generateHref(nextRoute, parameters);
        createLinkWrapper.onclick = (event) => {
            event.preventDefault();
            this.navigate(nextRoute, parameters);
        };
        return createLinkWrapper;
    };
}

export default Router;
