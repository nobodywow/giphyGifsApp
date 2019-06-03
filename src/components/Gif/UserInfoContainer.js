export const createUserInfoContainer = (gifInfo) => {
    let userInfoContainer = document.createElement('div');
    let username = document.createElement('span');
    let avatar = document.createElement('img');
    let datePublished = document.createElement('p');
    userInfoContainer.classList.add('info-container');
    avatar.src = gifInfo.avatarUrl;
    avatar.height =  50;
    avatar.width = 50;
    username.innerHTML = `Username: ${gifInfo.username}`;
    datePublished.innerHTML = `Published: ${gifInfo.postDate.split(' ')[0]}`; // split should be in some helper method
    userInfoContainer.appendChild(avatar);
    userInfoContainer.appendChild(username);
    userInfoContainer.appendChild(datePublished);
    return userInfoContainer;
};