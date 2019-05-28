import {createSearchContainer, createContentContainer, createGifContainer} from './elementsRender.js';
import { API, chooseRouter } from './api.js';
import Render from './Render.js';


let moreGifsCounter = 0;
let gifsData = [];
let gifAPI = API();
let router = chooseRouter();
let renderMethod = new Render(gifsData, moreGifsCounter, gifAPI, router);

renderMethod.renderElements();

// const renderFrontPage = () => {
//     document.getElementById('container').innerHTML = '';
//     createSearchContainer();  
//     let input = document.getElementById('search-input');
//     disableSearchButton(input);
//     document.getElementById('search-btn').addEventListener('click', () => {
//         buttonAction();
//     });     
// };

// const renderSearchPage = async () => {
//     createSearchContainer();
//     if (gifsData.length === 0) {
//         gifsData = await gifAPI.fetchGifArrayData(window.location.hash.split('=').pop());
//     }
//     createContentContainer(gifsData, moreGifsCounter);
//     let input = document.getElementById('search-input');
//     disableSearchButton(input);
//     document.getElementById('load-btn').addEventListener('click', () => {
//         addGifsCounter();
//     });  
// };

// const renderGifInfoPage = async () => {
//     createGifContainer();
// };

// const disableSearchButton = (input) => {
//     input.addEventListener('keyup', () => {
//         let button = document.getElementById('search-btn');
//         if (input.value.length === 0) {
//             button.disabled = true;        
//         } else if(input.value.length > 0) {
//             button.disabled = false;
//         }
//     });
//     return input;
// };

// const renderElements = async () => {
//     if(window.location.hash === '') {
//         renderFrontPage();          
//     }
//     if(window.location.href.includes('search')) {
//         renderSearchPage();   
//     } else if (window.location.href.includes('gif')) {        
//         renderGifInfoPage();
//     }
// };

// const addGifsCounter = () => {
//     moreGifsCounter = moreGifsCounter + 5;
//     window.dispatchEvent(new HashChangeEvent('hashchange'));
// };

// const buttonAction = async () => {
//     gifsData = [];
//     moreGifsCounter = 0;
//     let queryText = document.getElementById('search-input').value;
//     window.location.hash = `#/search?q=${queryText}`;
// };

// const onLoadEvent = () => {
//     window.addEventListener('hashchange', () => { //onload
//         renderElements();
//     });    
//     window.dispatchEvent(new HashChangeEvent('hashchange')); // for front page renderMethod
// }

// onLoadEvent();
