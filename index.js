import {createSearchContainer, createContentContainer, createGifContainer} from './elementsRender.js';
import { API } from './api.js';

let moreGifsCounter = 0;
let gifsData = [];
let gifAPI = API();

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
            gifsData = await gifAPI.fetchGifArrayData(window.location.hash.split('=').pop());
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

const addGifsCounter = () => {
    moreGifsCounter = moreGifsCounter + 5;
    window.dispatchEvent(new HashChangeEvent('hashchange'));
};

const buttonAction = async () => {
    gifsData = [];
    moreGifsCounter = 0;
    let queryText = document.getElementById('search-input').value;
    window.location.hash = `#/search?q=${queryText}`;
};

window.addEventListener('hashchange', () => {
    renderElements();
});

window.dispatchEvent(new HashChangeEvent('hashchange')); // for front page render

