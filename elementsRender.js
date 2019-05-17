import {fetchData, fetchSingleGifData} from './api.js';

export const createSearchContainer = () => {
    let container = document.getElementById('container');
    let searchContainer = document.createElement('div');
    searchContainer.classList.add('search-container');
    let input = document.createElement('input');
    input.id = 'search-input';
    input.autofocus = true;
    input.placeholder = 'Enter gif keywords...';
    input.type = 'text';
    let button = document.createElement('button');
    button.innerHTML = 'Search'
    button.id = 'search-btn';
    button.disabled = true;
    searchContainer.appendChild(input);
    searchContainer.appendChild(button);
    container.appendChild(searchContainer);
}

export const createContentContainer = (gifData, index) => {
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    gifData = gifData.slice(0, index + 5);
    gifData.forEach((item) => {
        let a = document.createElement('a');
        let img = document.createElement('img');
        a.href = `${window.location.href.replace(window.location.hash, '')}#/gif/${item.id}`;        
        img.src = item.previewImgURL;
        a.appendChild(img);
        contentContainer.appendChild(a);
    });          
    let loadButton = document.createElement('button');
    loadButton.id = 'load-btn';
    loadButton.innerHTML = 'more gifs...';  
    document.getElementById('container').appendChild(contentContainer);
    document.getElementById('container').appendChild(loadButton);
}

export const createGifContainer = async () => {
    let id = window.location.hash.split('/').pop();
    let gifElement = await fetchSingleGifData(id);
    let gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');
    let avatar = document.createElement('img');
    let username = document.createElement('p');
    let datePublished = document.createElement('p');
    let gif = document.createElement('img');
    let backButton = document.createElement('button');
    backButton.onclick = () => {
        window.location.hash = ''; 
    };
    avatar.src = gifElement.avatarURL;
    avatar.height =  50;
    avatar.width = 50;
    username.innerHTML = 'Username: ' + gifElement.username;
    datePublished.innerHTML = 'Published: ' + gifElement.postDate.split(' ')[0];
    gif.src = gifElement.originalImgURL;
    backButton.innerHTML = 'go back';
    backButton.id = 'back-btn';
    gifContainer.appendChild(gif);
    gifContainer.appendChild(avatar);
    gifContainer.appendChild(username);
    gifContainer.appendChild(datePublished);
    gifContainer.appendChild(backButton);
    document.getElementById('container').appendChild(gifContainer);
    localStorage.clear();
}