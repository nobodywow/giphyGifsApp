import { SingleGifComponent } from '../../components/SingleGifComponent/SingleGifComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

export const renderGifPage = async (router, gifApi, parameters, routesMap) => {
    let gifContainer = await SingleGifComponent(router, gifApi, parameters, routesMap);
    setContainerChildren(container, gifContainer);
};
