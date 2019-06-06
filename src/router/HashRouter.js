import Router from './Router.js';
import { env } from '../cfg/env.js';

class HashRouter extends Router {

    generateHref = (routeName, parameters) => `${window.location.origin}/#${env.PATH_SUFFIX}/${this.composeRoutePathname(routeName, parameters)}`;

    addNavigationButtonsListener = () => {
        window.addEventListener('hashchange', () => this.notifySubscribers());
    };

    navigateTo = (pathQuery) => {
        window.location.hash = `#/${pathQuery}`;
    };

    getPathname = () => {
        let pathnameSuffix = window.location.href.replace(`${window.location.origin}${env.PATH_SUFFIX}`, '').split('/')[2];
        if (!pathnameSuffix) {
            return '';
        }
        return pathnameSuffix;
    };
}

export default HashRouter;
