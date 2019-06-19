import { ContentContainer } from './ContentContainer.js';
import { Image } from '../shared/Image.js';
import { LoadButton } from './LoadButton.js';
import { ErrorMessage } from './ErrorMessage.js';
import { ButtonContainer } from './ButtonContainer.js';
import { ImageContainer } from './ImageContainer.js';

const GIF_LIMIT = 5;
const GIF_OFFSET = 5;

let gifs = [];
let gifOffset = 0;
let keyword = '';

export const PreviewComponent = (router, gifApi, parameters, routesMap) => {
    if (parameters) {
        keyword = parameters;
        gifs.length = 0;
        gifOffset = 0;
    }
    let loadButton = LoadButton();
    let contentContainer = ContentContainer();
    let buttonContainer = ButtonContainer();
    let imageContainer = ImageContainer();
    if (gifs.length === 0) {
        (async () => {
            gifs = await gifApi.getGifArray(keyword, GIF_LIMIT, gifOffset);
            showGifPreviews(gifs, router, imageContainer, routesMap);
        })();
    } else {
        showGifPreviews(gifs, router, imageContainer, routesMap);
    }    
    loadButton.onclick = async () => {
        gifOffset += GIF_OFFSET;
        let offsetArray = await gifApi.getGifArray(keyword, GIF_LIMIT, gifOffset);
        showGifPreviews(offsetArray, router, imageContainer, routesMap);
        gifs = [...gifs, ...offsetArray];
    };
    buttonContainer.appendChild(loadButton);
    contentContainer.appendChild(imageContainer);
    contentContainer.appendChild(buttonContainer);
    return contentContainer;
};

const showGifPreviews = (gifData, router, imageContainer, routesMap) => {
    if (gifData.length === 0) {
        let errorText = ErrorMessage();
        imageContainer.appendChild(errorText);
    } else {
        gifData.forEach((item) => {
            let link = router.createLinkWrapper(routesMap.gif, 'gif-preview', item.id);
            let image = Image(item.previewImgURL);
            link.appendChild(image);
            imageContainer.appendChild(link);
        });
    }
};
