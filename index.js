import { api, chooseRouter } from './src/cfg/chooseImplementations.js';
import Render from './src/Render.js';
import DataService from './src/utils/DataService.js';

const container = document.getElementById('container');
const gifApi = api();
const router = chooseRouter();
const dataService = new DataService(gifApi);
const renderMethod = new Render(container, router, dataService);

renderMethod.initialize();
renderMethod.renderElements(router.currentRoute);
