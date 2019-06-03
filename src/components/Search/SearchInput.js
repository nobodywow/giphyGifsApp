export const createSearchInput = () => {
    let input = document.createElement('input');
    input.id = 'search-input';
    input.autofocus = true;
    input.placeholder = 'Enter gif keywords...';
    input.type = 'text';
    input.value = '';
    return input;
};