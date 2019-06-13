import GiphyApi from '../api/GiphyApi.js';
import HashRouter from '../router/HashRouter.js';
import UrlRouter from '../router/UrlRouter.js';

export const api = () => new GiphyApi();
export const createRouter = () => new UrlRouter();
