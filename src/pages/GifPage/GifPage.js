import { SingleGifComponent } from '../../components/SingleGifComponent/SingleGifComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderGifPage = async (router, gifApi, parameters) => {
    let gifContainer = await SingleGifComponent(router, gifApi, parameters);
    setContainerChildren(container, gifContainer);
};
