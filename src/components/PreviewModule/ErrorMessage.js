import { en } from '../../locales/en/en.js';


export const ErrorMessage = () => {
    let error = document.createElement('p');
    error.innerHTML = en.ERROR_MESSAGE;
    return error;
};