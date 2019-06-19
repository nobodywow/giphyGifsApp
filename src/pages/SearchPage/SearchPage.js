import { PreviewComponent } from '../../components/PreviewComponent/PreviewComponent.js';
import { SearchComponent } from '../../components/SearchComponent/SearchComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderSearchPage = (router, gifApi, parameters, routesMap) => {
    let searchContainer = SearchComponent(router, gifApi, routesMap);
    let contentContainer = PreviewComponent(router, gifApi, parameters, routesMap);
    setContainerChildren(container, searchContainer, contentContainer);
};