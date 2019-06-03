import { createSearchButton } from './SearchButton.js';
import { createSearchContainer } from './SearchContainer.js';
import { createSearchInput } from './SearchInput.js';

const bindSearchButtonBehaviourToInput = (input, button) => {
    input.addEventListener('keyup', () => {
        if (input.value.length === 0) {
            button.disabled = true;        
        } else if(input.value.length > 0) {
            button.disabled = false;
        }
    });
};

const addEnterKeyPressListener = (input, router, dataHandler) => {
    input.addEventListener('keydown', (event) => {
        if (event.keyCode == '13' && input.value.length > 0) {
            dataHandler.clearData();
            router.redirect(router.ROUTES.SEARCH, input.value);
        }
    });
};

export const combineSearchContainer = (router, dataHandler) => {
    let searchContainer = createSearchContainer();
    let searchButton = createSearchButton();
    let searchInput = createSearchInput();
    bindSearchButtonBehaviourToInput(searchInput, searchButton);
    searchButton.onclick = async () => {
        dataHandler.clearData();   
        router.redirect(router.ROUTES.SEARCH, searchInput.value);
    };
    addEnterKeyPressListener(searchInput, router, dataHandler);
    searchContainer.appendChild(searchInput);
    searchContainer.appendChild(searchButton);    
    return searchContainer;
};