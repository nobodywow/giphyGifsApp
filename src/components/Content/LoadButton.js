export const createLoadButton = () => {
    let loadButton = document.createElement('button');
    loadButton.classList.add('load-button');
    loadButton.id = 'load-btn';
    loadButton.innerHTML = 'more gifs...';
    return loadButton;
};