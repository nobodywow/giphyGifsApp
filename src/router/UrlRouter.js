import Router from './Router.js'
import { env } from '../cfg/env.js';

class UrlRouter extends Router {
    
    generateHref = (routeName, parameters) => `${window.location.origin}${env.PATH_SUFFIX}/${this.getRoutePathname(routeName, parameters)}`;

    addNavigationButtonsListener = () => {
        window.addEventListener('popstate', () => this.notifySubscribers());
    };

    navigateTo = (pathQuery) => {
        history.pushState(null, null, `${window.location.pathname.split('/')[0]}${env.PATH_SUFFIX}/${pathQuery}`);
    };

    detectPathnameSuffix = () => {
        let pathnameSuffix = window.location.href.replace(`${window.location.origin}${env.PATH_SUFFIX}`, '').split('/')[1];
        if (!pathnameSuffix) {
            return '';
        }
        return pathnameSuffix;
    };
}

export default UrlRouter;
