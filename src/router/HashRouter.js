import Router from './Router.js';
import { env } from '../cfg/env.js';

class HashRouter extends Router {

    generateInfoHref = (itemInfo, routeName) => {
        return `${window.location.href.replace(window.location.hash, '')}#${env.PATH_SUFFIX}/${this.definePathUrl(routeName, itemInfo)}`;
    };

    detectBackOrForward = (onEvent) => {  // idk
        let hashHistory = [window.location.hash];
        let historyLength = window.history.length;

        return function() {
            let hash = window.location.hash;
            let length = window.history.length;
            if (hashHistory.length && historyLength == length) {
                if (hashHistory[hashHistory.length - 2] == hash) {
                    hashHistory = hashHistory.slice(0, -1);
                    onEvent();
                } else {
                    hashHistory.push(hash);
                    onEvent();
                }
            } else {
            hashHistory.push(hash);
            historyLength = length;
            }
        }
    };

    backButtonListener = () => {
        window.addEventListener('hashchange', this.detectBackOrForward(this.redirect));
    };

    navigateTo = (pathQuery) => {
        window.location.hash = `#/${pathQuery}`;
    };

    detectPathnameSuffix = () => {
        let pathnameSuffix = window.location.href.replace(`${window.location.origin}${env.PATH_SUFFIX}`, '').split('/')[2];
        if (!pathnameSuffix) {
            return '';
        }
        return pathnameSuffix;
    };
}

export default HashRouter;