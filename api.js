import GiphyAPI from './GiphyAPI.js';
import HashRouter from './HashRouter.js';
import UrlRouter from './UrlRouter.js';

export const API = () => new GiphyAPI();
export const chooseRouter = () => new UrlRouter();