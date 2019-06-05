import { ContentContainer } from './ContentContainer.js';
import { PreviewImage } from './PreviewImage.js';
import { LoadButton } from './LoadButton.js';
import { ErrorMessage } from './ErrorMessage.js';
import { ButtonContainer } from './ButtonContainer.js';
import { ImageContainer } from './ImageContainer.js';

let gifsData = [];
let gifOffset = 0;

export const PreviewModule = (router, dataService) => {
    let keyword = window.location.href.split('=')[1];  // fix somehow
    let loadButton = LoadButton();
    let contentContainer = ContentContainer();
    let buttonContainer = ButtonContainer();
    let imageContainer = ImageContainer();
    (async () => {
        if (gifsData.length === 0) {
            gifsData = await dataService.getDataArray(gifOffset, keyword);
        }        
        showGifPreviews(gifsData, router, imageContainer);
    })();
    loadButton.onclick = async () => {
        gifOffset += 5;
        let offsetArray = await dataService.getDataArray(gifOffset, keyword);
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
