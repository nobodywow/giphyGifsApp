import { createRouter } from './createImplementation.js';

export const config = {
    pathname: '/giphyGifsApp',
};

export const routes = [
    { name: 'front', route: '/', isQuery: false },
    { name: 'search', route: '/search', isQuery: true },
    { name: 'gif', route: '/gif', isQuery: false }
];

export const routesMap = {
    front: 'front',
    search: 'search',
    gif: 'gif'
};

export const initializeRouter = (config, routes) => {
    let router = createRouter(config);
    router.initialize(routes);
    return router;
};

