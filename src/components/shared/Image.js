export const Image = (imageSource) => {
    let img = document.createElement('img');
    img.src = imageSource;
    return img;
};
