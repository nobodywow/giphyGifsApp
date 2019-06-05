import { getDateFormat } from '../../utils/getDateFormat.js';

export const UserInfoContainer = (gifInfo) => {
    let userInfoContainer = document.createElement('div');
    let username = document.createElement('span');
    let avatar = document.createElement('img');
    let datePublished = document.createElement('p');
    userInfoContainer.classList.add('info-container');
    avatar.src = gifInfo.avatarUrl;
    avatar.height =  50;
    avatar.width = 50;
    username.innerHTML = `Username: ${gifInfo.username}`;
    datePublished.innerHTML = `Published: ${getDateFormat(gifInfo.postDate)}`;
    userInfoContainer.appendChild(avatar);
    userInfoContainer.appendChild(username);
    userInfoContainer.appendChild(datePublished);
    return userInfoContainer;
};