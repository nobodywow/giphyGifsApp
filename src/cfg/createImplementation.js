import GiphyApi from '../api/GiphyApi.js';
import HashRouter from '../newRouter/HashRouter.js';
import UrlRouter from '../newRouter/UrlRouter.js';

export const createApi = () => new GiphyApi();
export const createRouter = (config) => new UrlRouter(config);
