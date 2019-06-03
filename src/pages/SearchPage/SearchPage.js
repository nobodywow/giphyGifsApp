import { combineContentContainer } from './../../components/Content/Content.js';
import { combineSearchContainer } from './../../components/Search/Search.js';


export const renderSearchPage = async (router, dataHandler) => {
    container.innerHTML = '';
    let searchContainer = combineSearchContainer(router, dataHandler);
    let contentContainer = await combineContentContainer(router, dataHandler);
    container.appendChild(searchContainer);
    container.appendChild(contentContainer);
};