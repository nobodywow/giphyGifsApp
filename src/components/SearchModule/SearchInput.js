import { en } from '../../locales/en/en.js';

export const SearchInput = () => {
    let input = document.createElement('input');
    input.classList.add('search-input');
    input.autofocus = true;
    input.placeholder = en.SEARCH_INPUT_PLACEHOLDER;
    input.type = 'text';
    input.value = '';
    return input;
};