import { en } from '../../locales/en/en.js';

export const SearchButton = () => {
    let button = document.createElement('button');
    button.innerHTML = en.SEARCH_BUTTON;
    button.classList.add('search-btn');
    button.disabled = true;
    return button;
};