import { combineGifContainer } from './../../components/Gif/Gif.js';

export const renderGifPage = async (router, dataHandler) => {
    container.innerHTML = '';
    let gifContainer = await combineGifContainer(router, dataHandler);
    container.appendChild(gifContainer);
};