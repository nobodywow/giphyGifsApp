import { ContentContainer } from './ContentContainer.js';
import { PreviewImage } from './PreviewImage.js';
import { LoadButton } from './LoadButton.js';
import { ErrorMessage } from './ErrorMessage.js';
import { ButtonContainer } from './ButtonContainer.js';
import { ImageContainer } from './ImageContainer.js';

const GIF_LIMIT = 5;
const GIF_OFFSET = 5;

let gifsData = [];
let gifOffset = 0;
let keyword = '';

export const PreviewModule = (router, gifApi, parameters) => {
    if (parameters) {
        keyword = parameters;
        gifsData.length = 0;
        gifOffset = 0;
    }
    let loadButton = LoadButton();
    let contentContainer = ContentContainer();
    let buttonContainer = ButtonContainer();
    let imageContainer = ImageContainer();
    if (gifsData.length === 0) {
        (async () => {
            gifsData = await gifApi.getGifArray(keyword, GIF_LIMIT, gifOffset);
            showGifPreviews(gifsData, router, imageContainer);
        })();
    } else {
        showGifPreviews(gifsData, router, imageContainer);
    }    
    loadButton.onclick = async () => {
        gifOffset += GIF_OFFSET;
        let offsetArray = await gifApi.getGifArray(keyword, GIF_LIMIT, gifOffset);
        showGifPreviews(offsetArray, router, imageContainer);
        gifsData = [...gifsData, ...offsetArray];
    };
    buttonContainer.appendChild(loadButton);
    contentContainer.appendChild(imageContainer);
    contentContainer.appendChild(buttonContainer);
    return contentContainer;
};

const showGifPreviews = (gifData, router, imageContainer) => {
    if (gifData.length === 0) {
        let errorText = ErrorMessage();
        imageContainer.appendChild(errorText);
    } else {
        gifData.forEach((item) => {
            let a = router.linkWrapper(router.ROUTES.GIF, item.id);
            let img = PreviewImage(item.previewImgURL);
            a.appendChild(img);
            imageContainer.appendChild(a);
        });        
    }           
};
