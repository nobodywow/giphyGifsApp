// import {fetchData} from './api';



sessionStorage.setItem("index", 0);
const URL = window.location;
const API_KEY = 'GJ3cFTvnDd8Qu2U0fB5feCKamyvnrarm';
console.log(window.location);

//url ending = "newUrl".replace(URL, '')

const createSearchContainer = () => {
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
    searchContainer.appendChild(input);
    searchContainer.appendChild(button);
    container.appendChild(searchContainer);
}

const createContentContainer = (gifData) => {
    let index = sessionStorage.getItem('index');
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');
    gifData = gifData.slice(0, index + 5);
    gifData.forEach((item) => {
        let a = document.createElement('a');
        let img = document.createElement('img');
        a.href = `${window.location.origin}#/gif/${item.id}`;        
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

const createGifContainer = (gifElement) => {
    let gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');
    let avatar = document.createElement('img');
    let username = document.createElement('p');
    let datePublished = document.createElement('p');
    let gif = document.createElement('img');
    let backButton = document.createElement('button');
    avatar.src = gifElement.avatarURL;
    avatar.height =  50;
    avatar.width = 50;
    username.innerHTML = 'username: ' + gifElement.username;
    datePublished.innerHTML = gifElement.postDate.split(' ')[0];
    gif.src = gifElement.originalImgURL;
    backButton.innerHTML = 'go back';
    backButton.id = 'back-btn';
    gifContainer.appendChild(gif);
    gifContainer.appendChild(avatar);
    gifContainer.appendChild(username);
    gifContainer.appendChild(datePublished);
    gifContainer.appendChild(backButton);
    document.getElementById('container').appendChild(gifContainer);
}

const renderElements = () => {
    let gifsData = JSON.parse(sessionStorage.getItem('gifsData'));
    if(window.location.hash === '') {
        document.getElementById('container').innerHTML = '';
        createSearchContainer();  
        let input = document.getElementById('search-input');
        input.addEventListener('keyup', () => {
            let button = document.getElementById('search-btn');
            if(input.value.length === 0) {
                button.disabled = true;        
            } else if(input.value.length > 0) {
                button.disabled = false;
            }
        });    
        document.getElementById('search-btn').addEventListener('click', () => {
            buttonAction();
        });       
    }

    if(window.location.hash.includes('search')) {
        document.getElementById('container').innerHTML = '';
        createSearchContainer();
        createContentContainer(gifsData);
        document.getElementById('load-btn').addEventListener('click', () => {
            setIndex();
        });        
    }

    if(window.location.hash.includes('gif')) {
        document.getElementById('container').innerHTML = '';
        let id = window.location.hash.split('/').pop();
        let gifInfo = gifsData.reduce((accum, item) => {
            return item.id == id ? item : accum;
        }, {});
        createGifContainer(gifInfo);
    }
}

window.addEventListener('hashchange', () => {
    renderElements();    
});


window.dispatchEvent(new HashChangeEvent('hashchange'));


const createKeyWordURL = (keyWords) => {
    return keyWords.split(' ').join('+');    
}

const queryProcessing = (gifData, dataArray) => {
    dataArray = gifData.data.map((item) => {
        let dataObject = {};
        dataObject.id = item.id;
        dataObject.title = item.title;
        dataObject.username = item.username;
        dataObject.avatarURL = item.username ? item.user.avatar_url : '';
        dataObject.postDate = item.import_datetime;
        dataObject.previewImgURL = item.images.fixed_height_small.url;
        dataObject.originalImgURL = item.images.original.url;
        return dataObject;
    });
    return dataArray;
}

// to fix keyword
const fetchData = async (keyWord, dataArray) => {
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/search?q=${createKeyWordURL(keyWord)}&api_key=${API_KEY}&limit=20`).then(response => response.json());
    dataArray = queryProcessing(giphyResponse, dataArray);
    return [ dataArray, createKeyWordURL(keyWord) ];
}


const displayImages = (gifData) => {
    let index = Number(sessionStorage.getItem('index'));
    let container = document.getElementById('content-container');
    gifData = gifData.slice(index, index + 5);
    // createContentContainer(gifData);
    gifData.forEach((item) => {
        let a = document.createElement('a');
        let img = document.createElement('img');
        a.href = `${URL}${item.id}`;        
        img.src = item.previewImgURL;
        a.appendChild(img);
        container.appendChild(a);
        index = index + 1;
    });
    sessionStorage.setItem('index', index);
}

const setIndex = () => {
    let index = Number(sessionStorage.getItem('index'));
    index = index + 5;
    sessionStorage.setItem('index', index);    
    window.dispatchEvent(new HashChangeEvent('hashchange'));
}

const buttonAction = async () => {
    let gifData = [];
    if(sessionStorage.getItem('gifsData') === null) {    
    var queryText = document.getElementById('search-input').value;
    gifsObject = await fetchData(queryText, gifData);
    gifData = gifsObject[0];    
    sessionStorage.setItem('gifsData', JSON.stringify(gifData));    
    } else {
        gifData = JSON.parse(sessionStorage.getItem('gifsData'));
    }    
    // displayImages(gifData);
    window.location.hash = `#/search?q=${gifsObject[1]}`;
}

// TODO make prettier
// let input = document.getElementById('search-input');
// input.addEventListener('keyup', () => {
//     let button = document.getElementById('search-btn');
//     if(input.value.length === 0) {
//         button.disabled = true;        
//     } else if(input.value.length > 0) {
//         button.disabled = false;
//     }
// });





