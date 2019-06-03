export const createBackButton = () => {
    let backButton = document.createElement('button');
    backButton.innerHTML = 'go back';
    backButton.id = 'back-btn';
    return backButton;
};