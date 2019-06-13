import { api, createRouter } from './src/cfg/createImplementation.js';
import Render from './src/Render.js';

const container = document.getElementById('container');
const gifApi = api();
const router = createRouter();
const renderEngine = new Render(container, router, gifApi);

renderEngine.initialize();
renderEngine.renderElements(router.getCurrentRoute());
