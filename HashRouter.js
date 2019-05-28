import Router from './Router.js'

class HashRouter extends Router {

    goToDefaultUrl = () => {
        window.location.hash = '';
    };

    createImgHref = (item) => {
        return `${window.location.href.replace(window.location.hash, '')}#/gif/${item.id}`;
    };

    createLinkWrapper = (item, callback) => {
        let linkWrapper = document.createElement('a');
        linkWrapper.href = this.createImgHref(item);  
        linkWrapper.onclick = (event) => {
            event.preventDefault();
            this.changeRoute(callback, 'gif', item.id);
        }; 
        return linkWrapper;
    };    

    backButtonListener = (callback) => { //?
        window.addEventListener('hashchange', callback);
    };

    navigateTo = (pathQuery) => {
        window.location.hash = `#/${pathQuery}`;
    };
}

export default HashRouter;