import { BackButton } from './BackButton.js';
import { GifContainer } from './GifContainer.js';
import { Image } from '../shared/Image.js';
import { UserInfoContainer } from './UserInfoContainer.js';

let gifCache = {};

export const SingleGifComponent = async (router, gifApi, parameters, routesMap) => {
    if (parameters) {
        gifCache = await gifApi.getSingleGif(parameters);
    }
    let gifContainer = GifContainer();
    let infoContainer = UserInfoContainer(gifCache);
    let gifImage = Image(gifCache.originalImgURL);
    let backButton = BackButton();
    backButton.onclick = () => {
        router.navigate(routesMap.front);
    };
    gifContainer.appendChild(gifImage);
    gifContainer.appendChild(infoContainer);
    gifContainer.appendChild(backButton);
    return gifContainer;
};