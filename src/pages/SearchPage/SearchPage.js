import { PreviewModule } from '../../components/PreviewModule/PreviewModule.js';
import { SearchModule } from '../../components/SearchModule/SearchModule.js';
import { clearAndExpandContainer } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderSearchPage = (router, gifApi, parameters) => {
    let searchContainer = SearchModule(router, gifApi);
    let contentContainer = PreviewModule(router, gifApi, parameters);
    clearAndExpandContainer(container, searchContainer, contentContainer);
};