export const createSearchButton = () => {
    let button = document.createElement('button');
    button.innerHTML = 'Search'
    button.id = 'search-btn';
    button.disabled = true;
    return button;
};