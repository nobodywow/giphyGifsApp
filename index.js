// import {fetchData} from './api';

const URL = window.location;
const API_KEY = 'GJ3cFTvnDd8Qu2U0fB5feCKamyvnrarm';

const createKeyWordURL = (keyWords) => {
    return keyWords.split(' ').join('+');    
}

const queryProcessing = (gifData, dataArray) => {
    dataArray = gifData.data.map((item) => {
        let dataObject = {};
        dataObject.id = item.id;
        dataObject.title = item.title;
        dataObject.username = item.username;
        dataObject.avatarURL = item.username ? item.user.avatar_url : "";
        dataObject.postDate = item.import_datetime;
        dataObject.previewImgURL = item.images.fixed_height_small.url;
        dataObject.originalImgURL = item.images.original.url;
        return dataObject;
    });
    return dataArray;
}

// to fix keyword
const fetchData = async (keyWord, dataArray) => {
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/search?q=${createKeyWordURL(keyWord)}&api_key=${API_KEY}&limit=5`).then(response => response.json());
    dataArray = queryProcessing(giphyResponse, dataArray);
    return [ dataArray, createKeyWordURL(keyWord) ];
}


const displayImages = (gifsData) => {
    let container = document.getElementById('content-container');
    gifsData.forEach((item) => {
        let a = document.createElement('a');
        let img = document.createElement('img');
        a.href = `${URL}${item.id}`;        
        img.src = item.previewImgURL;
        a.appendChild(img);
        container.appendChild(a);
    });
    
}

const buttonAction = async () => {
    let gifsData = [];
    var queryText = document.getElementById('search-input').value;
    gifsObject = await fetchData(queryText, gifsData);
    gifsData = gifsObject[0];
    displayImages(gifsData);
    window.history.pushState('', 'gifs', `/search?q=<${gifsObject[1]}>`);
}

// TODO make prettier
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