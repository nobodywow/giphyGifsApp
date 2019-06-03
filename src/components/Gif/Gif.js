import { createBackButton } from './BackButton.js';
import { createGifContainer } from './GifContainer.js';
import { createGifImage } from './GifImage.js';
import { createUserInfoContainer } from './UserInfoContainer.js';

export const combineGifContainer = async (router, dataHandler) => {
    let gifInfo = await dataHandler.updateDataObject();
    let gifContainer = createGifContainer();
    let infoContainer = createUserInfoContainer(gifInfo);
    let gifImage = createGifImage(gifInfo);
    let backButton = createBackButton();
    backButton.onclick = () => {router.redirect(router.ROUTES.FRONT)};
    gifContainer.appendChild(gifImage);
    gifContainer.appendChild(infoContainer);
    gifContainer.appendChild(backButton);
    return gifContainer;
};