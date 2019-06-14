import { SearchComponent } from '../../components/SearchComponent/SearchComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderFrontPage = (router) => {
    let searchContainer = SearchComponent(router);
    setContainerChildren(container, searchContainer);
};