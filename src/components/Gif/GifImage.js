export const createGifImage = (gifInfo) => {
    let gifImage = document.createElement('img');
    gifImage.src = gifInfo.originalImgURL;
    return gifImage;
};