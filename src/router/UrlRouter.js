import Router from './Router.js'
import { env } from '../cfg/env.js';

class UrlRouter extends Router {

    generateInfoHref = (itemInfo, routeName) => { //fix
        return `${window.location.href.replace(window.location.href.split('/').pop(), '')}${env.PATH_SUFFIX}/${this.definePathUrl(routeName, itemInfo)}`;
    };
    
    backButtonListener = () => {
        window.addEventListener('popstate', () => this.redirect());
    };

    navigateTo = (pathQuery) => {
        history.pushState(null, null, `${window.location.pathname.split('/')[0]}/${pathQuery}`);
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