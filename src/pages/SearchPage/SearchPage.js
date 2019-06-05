import { PreviewModule } from '../../components/PreviewModule/PreviewModule.js';
import { SearchModule } from '../../components/SearchModule/SearchModule.js';
import { clearAndExpandContainer } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderSearchPage = (router, dataService) => {
    let searchContainer = SearchModule(router, dataService);
    let contentContainer = PreviewModule(router, dataService);
    clearAndExpandContainer(container, searchContainer, contentContainer);
};