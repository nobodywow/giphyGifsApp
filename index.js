import { createApi } from './src/cfg/createImplementation.js';
import Render from './src/Render.js';
import { initializeRouter, config, routes } from './src/cfg/router.config.js';

const container = document.getElementById('container');
const gifApi = createApi();
const router = initializeRouter(config, routes);
const renderEngine = new Render(container, router, gifApi);

renderEngine.initialize();
renderEngine.renderElements(router.getCurrentRoute());
