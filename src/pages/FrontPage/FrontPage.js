import { SearchComponent } from '../../components/SearchComponent/SearchComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderFrontPage = (router, routesMap) => {
    let searchContainer = SearchComponent(router, routesMap);
    setContainerChildren(container, searchContainer);
};