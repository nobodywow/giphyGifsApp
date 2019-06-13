import { SingleGifModule } from '../../components/SingleGifComponent/SingleGifComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderGifPage = async (router, gifApi, parameters) => {
    let gifContainer = await SingleGifModule(router, gifApi, parameters);
    setContainerChildren(container, gifContainer);
};
