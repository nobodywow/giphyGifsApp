import { en } from '../../locales/en/en.js';

export const BackButton = () => {
    let backButton = document.createElement('button');
    backButton.innerHTML = en.GIF_BACK_BUTTON;
    backButton.id = 'back-btn';
    return backButton;
};