import { combineSearchContainer } from './../../components/Search/Search.js';

export const renderFrontPage = (router, dataHandler) => {
    container.innerHTML = '';
    let searchContainer = combineSearchContainer(router, dataHandler);
    container.appendChild(searchContainer);
};