import { SearchModule } from '../../components/SearchModule/SearchModule.js';
import { clearAndExpandContainer } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderFrontPage = (router) => {
    let searchContainer = SearchModule(router);
    clearAndExpandContainer(container, searchContainer);
};