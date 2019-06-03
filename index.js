import { API, chooseRouter } from './src/cfg/api.js';
import Render from './Render.js';
import DataHandler from './src/utils/DataHandler.js';

let gifsData = [];
let moreGifsCounter = 0;
let gifAPI = API();
let router = chooseRouter();
let dataHandler = new DataHandler(gifsData, moreGifsCounter, gifAPI);
let renderMethod = new Render(gifAPI, router, dataHandler);

renderMethod.initialize();
renderMethod.renderElements(router.currentRoute);