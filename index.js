import { createApi } from './src/cfg/createImplementation.js';
import Render from './src/Render.js';
import { initializeRouter } from './src/cfg/router.config.js';

const container = document.getElementById('container');
const gifApi = createApi();
const router = initializeRouter();
const renderEngine = new Render(container, router, gifApi);

renderEngine.initialize();
renderEngine.renderElements(router.getCurrentRoute(), router.getParametersFromUrl());
