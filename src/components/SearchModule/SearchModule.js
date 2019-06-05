import { SearchButton } from './SearchButton.js';
import { SearchContainer } from './SearchContainer.js';
import { SearchInput } from './SearchInput.js';

const ENTER_KEY_NUMBER = '13';

const bindSearchButtonBehaviourToInput = (input, button) => {
    input.addEventListener('keyup', () => {
        button.disabled = !(input.value.length > 0);
    });
};

const addEnterKeypressListener = (input, router) => {
    input.addEventListener('keydown', (event) => {
        if (event.keyCode === ENTER_KEY_NUMBER && input.value.length > 0) {
            router.navigate(router.ROUTES.SEARCH, input.value);
        }
    });
};

export const SearchModule = (router) => {
    let searchContainer = SearchContainer();
    let searchButton = SearchButton();
    let searchInput = SearchInput();
    bindSearchButtonBehaviourToInput(searchInput, searchButton);
    searchButton.onclick = () => {
        router.navigate(router.ROUTES.SEARCH, searchInput.value);
    };
    addEnterKeypressListener(searchInput, router);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);    
    return searchContainer;
};