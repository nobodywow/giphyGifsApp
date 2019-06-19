import { SearchButton } from './SearchButton.js';
import { SearchContainer } from './SearchContainer.js';
import { SearchInput } from './SearchInput.js';

const ENTER_KEY_CODE = '13';

const bindSearchButtonBehaviourToInput = (input, button) => {
    input.addEventListener('keyup', () => {
        button.disabled = input.value.length === 0;
    });
};

const addEnterKeyDownListener = (input, router, routesMap) => {
    input.addEventListener('keydown', (event) => {
        if (event.keyCode === ENTER_KEY_CODE && input.value.length > 0) {
            router.navigate(routesMap.search, input.value);
        }
    });
};

export const SearchComponent = (router, routesMap) => {
    let searchContainer = SearchContainer();
    let searchButton = SearchButton();
    let searchInput = SearchInput();
    bindSearchButtonBehaviourToInput(searchInput, searchButton);
    searchButton.onclick = () => {
        router.navigate(routesMap.search, searchInput.value);
    };
    addEnterKeyDownListener(searchInput, router, routesMap);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);    
    return searchContainer;
};
