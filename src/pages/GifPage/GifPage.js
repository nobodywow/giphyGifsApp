import { SingleGifModule } from '../../components/SingleGifModule/SingleGifModule.js';
import { clearAndExpandContainer } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderGifPage = async (router, dataService) => {
    let gifContainer = await SingleGifModule(router, dataService);
    clearAndExpandContainer(container, gifContainer);
};
