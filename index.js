import {fetchData} from './api.js';
import {createSearchContainer, createContentContainer, createGifContainer} from './elementsRender.js';

// localStorage.setItem("index", 0);
let index = 0;
let gifsData = [];

console.log(window.location);

const renderElements = async () => {
    // let gifsData = JSON.parse(localStorage.getItem('gifsData'));
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
        if (gifsData.length === 0) {
            let gifsObject = await fetchData(window.location.hash.split('=').pop(), gifsData);
            gifsData = gifsObject[0];
        } 
        createContentContainer(gifsData, index);
        let input = document.getElementById('search-input');
        input.addEventListener('keyup', () => {
            let button = document.getElementById('search-btn');
            if(input.value.length === 0) {
                button.disabled = true;        
            } else if(input.value.length > 0) {
                button.disabled = false;
            }
        });    
        document.getElementById('load-btn').addEventListener('click', () => {
            setIndex();
        });        
    }

    if(window.location.hash.includes('gif')) {        
        document.getElementById('container').innerHTML = '';
        // let id = window.location.hash.split('/').pop();
        // let gifInfo = gifsData.reduce((accum, item) => {
        //     return item.id == id ? item : accum;
        // }, {});
        createGifContainer();
    }
}

window.addEventListener('hashchange', () => {
    renderElements();
});


window.dispatchEvent(new HashChangeEvent('hashchange'));


// const displayImages = (gifData) => {
//     let index = Number(localStorage.getItem('index'));
//     let container = document.getElementById('content-container');
//     gifData = gifData.slice(index, index + 5);
//     // createContentContainer(gifData);
//     gifData.forEach((item) => {
//         let a = document.createElement('a');
//         let img = document.createElement('img');
//         a.href = `${URL}${item.id}`;        
//         img.src = item.previewImgURL;
//         a.appendChild(img);
//         container.appendChild(a);
//         index = index + 1;
//     });
//     localStorage.setItem('index', index);
// }

const setIndex = () => {
    // let index = Number(localStorage.getItem('index'));
    index = index + 5;
    // localStorage.setItem('index', index);    
    window.dispatchEvent(new HashChangeEvent('hashchange'));
}

const buttonAction = async () => {
    // let gifData = [];
    let keyWord = '';
    // if(localStorage.getItem('gifsData') === null) {
    if(gifsData.length === 0) {    
    var queryText = document.getElementById('search-input').value;
    const gifsObject = await fetchData(queryText, gifsData);
    [gifsData, keyWord] = [gifsObject[0], gifsObject[1]];    
    // localStorage.setItem('gifsData', JSON.stringify(gifData))    
    }   
    window.location.hash = `#/search?q=${keyWord}`;
}