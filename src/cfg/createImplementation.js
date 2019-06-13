import GiphyApi from '../api/GiphyApi.js';
import HashRouter from '../router/HashRouter.js';
import UrlRouter from '../router/UrlRouter.js';

export const createApi = () => new GiphyApi();
export const createRouter = () => new UrlRouter();
