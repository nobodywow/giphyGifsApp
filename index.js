import {fetchGifArrayData} from './api.js';
import {createSearchContainer, createContentContainer, createGifContainer} from './elementsRender.js';

let moreGifsCounter = 0;
let gifsData = [];

const disableSearchButton = (input) => {
    input.addEventListener('keyup', () => {
        let button = document.getElementById('search-btn');
        if (input.value.length === 0) {
            button.disabled = true;        
        } else if(input.value.length > 0) {
            button.disabled = false;
        }
    });
    return input;
};

const renderElements = async () => {
    if(window.location.hash === '') {
        document.getElementById('container').innerHTML = '';
        createSearchContainer();  
        let input = document.getElementById('search-input');
        disableSearchButton(input);
        document.getElementById('search-btn').addEventListener('click', () => {
            buttonAction();
        });       
    }

    if(window.location.hash.includes('search')) {
        document.getElementById('container').innerHTML = '';
        createSearchContainer();
        if (gifsData.length === 0) {
            let gifsObject = await fetchGifArrayData(window.location.hash.split('=').pop(), gifsData);
            gifsData = gifsObject[0];
        } 
        createContentContainer(gifsData, moreGifsCounter);
        let input = document.getElementById('search-input');
        disableSearchButton(input);
        document.getElementById('load-btn').addEventListener('click', () => {
            addGifsCounter();
        });        
    } else if (window.location.hash.includes('gif')) {        
        document.getElementById('container').innerHTML = '';
        createGifContainer();
    }
};

window.addEventListener('hashchange', () => {
    renderElements();
});

window.dispatchEvent(new HashChangeEvent('hashchange')); // for front page render

const addGifsCounter = () => {
    moreGifsCounter = moreGifsCounter + 5;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
};

const buttonAction = async () => {
    gifsData = [];
    moreGifsCounter = 0;
    let keyWord = '';
    if (gifsData.length === 0) {    
        let queryText = document.getElementById('search-input').value;
        const gifsObject = await fetchGifArrayData(queryText, gifsData);
        [gifsData, keyWord] = [gifsObject[0], gifsObject[1]];    
    }   
    window.location.hash = `#/search?q=${keyWord}`;
};