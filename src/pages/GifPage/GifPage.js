import { SingleGifModule } from '../../components/SingleGifModule/SingleGifModule.js';
import { clearAndExpandContainer } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderGifPage = async (router, gifApi, parameters) => {
    let gifContainer = await SingleGifModule(router, gifApi, parameters);
    clearAndExpandContainer(container, gifContainer);
};
