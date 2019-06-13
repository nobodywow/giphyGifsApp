import { createApi, createRouter } from './src/cfg/createImplementation.js';
import Render from './src/Render.js';

const container = document.getElementById('container');
const gifApi = createApi();
const router = createRouter();
const renderEngine = new Render(container, router, gifApi);

renderEngine.initialize();
renderEngine.renderElements(router.getCurrentRoute());
