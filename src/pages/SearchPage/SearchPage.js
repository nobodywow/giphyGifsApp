import { PreviewModule } from '../../components/PreviewComponent/PreviewComponent.js';
import { SearchModule } from '../../components/SearchComponent/SearchComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderSearchPage = (router, gifApi, parameters) => {
    let searchContainer = SearchModule(router, gifApi);
    let contentContainer = PreviewModule(router, gifApi, parameters);
    setContainerChildren(container, searchContainer, contentContainer);
};