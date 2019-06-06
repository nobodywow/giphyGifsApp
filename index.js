import { api, chooseRouter } from './src/cfg/chooseImplementations.js';
import Render from './src/Render.js';

const container = document.getElementById('container');
const gifApi = api();
const router = chooseRouter();
const renderMethod = new Render(container, router, gifApi);

renderMethod.initialize();
renderMethod.renderElements(router.currentRoute);
