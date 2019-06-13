import { en } from '../../locales/en/en.js';

export const BackButton = () => {
    let backButton = document.createElement('button');    
    backButton.classList.add('search-btn');
    backButton.innerHTML = en.GIF_BACK_BUTTON;
    return backButton;
};