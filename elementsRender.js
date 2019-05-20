import {fetchSingleGifData} from './api.js';

export const createSearchContainer = () => {
    let container = document.getElementById('container');
    let searchContainer = document.createElement('div');
    let input = document.createElement('input');        
    let button = document.createElement('button');
    button.innerHTML = 'Search'
    button.id = 'search-btn';
    button.disabled = true;
    input.id = 'search-input';
    input.autofocus = true;
    input.placeholder = 'Enter gif keywords...';
    input.type = 'text';
    input.value = '';
    searchContainer.classList.add('search-container');
    searchContainer.appendChild(input);
    searchContainer.appendChild(button);
    container.appendChild(searchContainer);
};

export const createContentContainer = (gifData, index) => {
    let container = document.getElementById('container');
    let contentContainer = document.createElement('div');
    let loadButton = document.createElement('button');
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
    loadButton.id = 'load-btn';
    loadButton.innerHTML = 'more gifs...';  
    container.appendChild(contentContainer);
    container.appendChild(loadButton);
};

export const createGifContainer = async () => {
    let gifID = window.location.hash.split('/').pop();
    let gifElement = await fetchSingleGifData(gifID);
    let gifContainer = document.createElement('div');
    let infoContainer = document.createElement('div');
    let gifImage = document.createElement('img');
    let avatar = document.createElement('img');
    let username = document.createElement('span');
    let datePublished = document.createElement('p');  
    let backButton = document.createElement('button');
    avatar.src = gifElement.avatarURL;
    avatar.height =  50;
    avatar.width = 50;
    username.innerHTML = `Username: ${gifElement.username}`;   
    if (gifElement !== '') {
        infoContainer.appendChild(avatar);
        infoContainer.appendChild(username);
    }    
    datePublished.innerHTML = `Published: ${gifElement.postDate.split(' ')[0]}`;    
    infoContainer.appendChild(datePublished);
    backButton.onclick = () => {
        window.location.hash = ''; 
    };    
    backButton.innerHTML = 'go back';
    backButton.id = 'back-btn';    
    gifImage.src = gifElement.originalImgURL;
    gifContainer.classList.add('gif-container');
    gifContainer.appendChild(gifImage);    
    infoContainer.classList.add('info-container');
    gifContainer.appendChild(infoContainer);
    gifContainer.appendChild(backButton);
    document.getElementById('container').appendChild(gifContainer);
};