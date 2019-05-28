import Router from './Router.js'

class UrlRouter extends Router {

    goToDefaultUrl = (callback) => {
        this.changeRoute(callback, 'front', ' ');
    };

    createImgHref = (item) => {
        return `${window.location.href.replace(window.location.href.split('/').pop(), '')}gif/${item.id}`
    };

    createLinkWrapper = (item, callback) => {
        let linkWrapper = document.createElement('a');  
        linkWrapper.href = this.createImgHref(item);        // pass this as argument too(onclick)?
        linkWrapper.onclick = (event) => {
            event.preventDefault();
            this.changeRoute(callback, 'gif', item.id);
        };
        return linkWrapper;
    };
    
    backButtonListener = (callback) => {
        window.addEventListener('popstate', callback);
    };

    navigateTo = (pathQuery) => {
        history.pushState(null, null, `${window.location.pathname.split('/')[0]}/${pathQuery}`); // some stuff
    };

}

// gifs href ???

export default UrlRouter;

//