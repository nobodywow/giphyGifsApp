import { en } from '../../locales/en/en.js';

export const LoadButton = () => {
    let loadButton = document.createElement('button');
    loadButton.classList.add('load-button');
    loadButton.innerHTML = en.LOAD_BUTTON;
    return loadButton;
};