import { BackButton } from './BackButton.js';
import { GifContainer } from './GifContainer.js';
import { GifImage } from './GifImage.js';
import { UserInfoContainer } from './UserInfoContainer.js';

export const SingleGifModule = async (router, dataService) => {
    let gifInfo = await dataService.getDataObject(window.location.href.split('/').pop()); // fix this too
    let gifContainer = GifContainer();
    let infoContainer = UserInfoContainer(gifInfo);
    let gifImage = GifImage(gifInfo);
    let backButton = BackButton();
    backButton.onclick = () => {
        router.navigate(router.ROUTES.FRONT);
    };
    gifContainer.appendChild(gifImage);
    gifContainer.appendChild(infoContainer);
    gifContainer.appendChild(backButton);
    return gifContainer;
};