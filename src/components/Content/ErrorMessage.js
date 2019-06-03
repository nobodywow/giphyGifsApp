export const createErrorMessage = () => {
    let error = document.createElement('p');
    error.innerHTML = 'No gifs found. Try again please.';
    return error;
};