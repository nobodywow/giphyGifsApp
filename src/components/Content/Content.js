import { createContentContainer } from './ContentContainer.js';
import { createPreviewImage } from './PreviewImage.js';
import { createLoadButton } from './LoadButton.js';
import { createErrorMessage } from './ErrorMessage.js';
 

export const combineContentContainer = async (router, dataHandler) => {
    if (dataHandler.gifsData.length === 0) {   // redesign this stuff ?
        dataHandler.gifData = await dataHandler.updateDataArray();
    }
    let contentContainer = createContentContainer();
    let loadButton = createLoadButton();
    loadButton.onclick = async () => {
        dataHandler.gifData = await dataHandler.updateDataArray();
        router.redirect();
    };
    if (dataHandler.gifData.length === 0) {
        let errorText = createErrorMessage();
        contentContainer.appendChild(errorText);
    } else {
        dataHandler.gifData.forEach((item) => {
            let a = router.createLinkWrapper(item.id, router.ROUTES.GIF);
            let img = createPreviewImage(item.previewImgURL);
            a.appendChild(img);
            contentContainer.appendChild(a);
        });        
        contentContainer.appendChild(loadButton);
    }
    
    return contentContainer;
};