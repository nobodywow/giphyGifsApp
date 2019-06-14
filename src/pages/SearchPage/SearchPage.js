import { PreviewComponent } from '../../components/PreviewComponent/PreviewComponent.js';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderSearchPage = (router, gifApi, parameters) => {
    let searchContainer = SearchComponent(router, gifApi);
    let contentContainer = PreviewComponent(router, gifApi, parameters);
    setContainerChildren(container, searchContainer, contentContainer);
};