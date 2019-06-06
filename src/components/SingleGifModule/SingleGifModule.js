import { BackButton } from './BackButton.js';
import { GifContainer } from './GifContainer.js';
import { GifImage } from './GifImage.js';
import { UserInfoContainer } from './UserInfoContainer.js';

let gifCache = {};

export const SingleGifModule = async (router, gifApi, parameters) => {
    if (parameters) {
        gifCache = await gifApi.getSingleGif(parameters);
    }
    let gifContainer = GifContainer();
    let infoContainer = UserInfoContainer(gifCache);
    let gifImage = GifImage(gifCache);
    let backButton = BackButton();
    backButton.onclick = () => {
        router.navigate(router.ROUTES.FRONT);
    };
    gifContainer.appendChild(gifImage);
    gifContainer.appendChild(infoContainer);
    gifContainer.appendChild(backButton);
    return gifContainer;
};