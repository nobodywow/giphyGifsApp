import GiphyApi from './../api/GiphyAPI.js';
import HashRouter from './../router/HashRouter.js';
import UrlRouter from './../router/UrlRouter.js';

export const API = () => new GiphyApi();
export const chooseRouter = () => new UrlRouter();