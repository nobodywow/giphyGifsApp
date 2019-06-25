import { createRouter } from './createImplementation.js';
import { env } from './env.js';

const config = {
    pathname: env.PATHNAME,
};

const routes = [
    { name: 'front', route: '/' },
    { name: 'search', route: '/search' },
    { name: 'gif', route: '/gif/:id' }
];

export const routesMap = {
    front: 'front',
    search: 'search',
    gif: 'gif'
};

export const initializeRouter = () => {
    let router = createRouter(config);
    router.initialize(routes);
    return router;
};

