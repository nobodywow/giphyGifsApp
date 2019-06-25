import { SingleGifComponent } from '../../components/SingleGifComponent/SingleGifComponent.js';
import { setContainerChildren } from '../utils/helper.js';

const container = document.getElementById('container');

const options = {
    id: 'id'    
}

export const renderGifPage = async (router, gifApi, parameters, routesMap) => {
    let gifContainer = await SingleGifComponent(router, gifApi, parameters[options.id], routesMap);
    setContainerChildren(container, gifContainer);
};
