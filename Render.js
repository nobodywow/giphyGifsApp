// import {createSearchContainer, createContentContainer, createGifContainer} from './elementsRender.js';
import { env } from './env.js';

class Render {
    
    constructor(gifsData, offsetValue, API, router) {
        this.gifsData = gifsData;
        this.offsetValue = offsetValue;
        this.gifAPI = API;
        this.router = router;
    }

    _disableButton = (input, button) => {
        input.addEventListener('keyup', () => {
            if (input.value.length === 0) {
                button.disabled = true;        
            } else if(input.value.length > 0) {
                button.disabled = false;
            }
        });
        return input;
    };

    _renderFrontPage = () => {
        document.getElementById('container').innerHTML = '';
        this._createSearchContainer({});  
        let input = document.getElementById('search-input');
        let button = document.getElementById('search-btn');
        this._disableButton(input, button);

        document.getElementById('search-btn').addEventListener('click', () => { // replace
            this.gifsData = [];
            this.offsetValue = 0;
            this.router.changeRoute(this.renderElements, 'search' , input.value);
        });
    };

    _renderSearchPage = async (linkWrapper) => {
        document.getElementById('container').innerHTML = '';
        this._createSearchContainer();

        if (this.gifsData.length === 0) {
            this.gifsData = await this.gifAPI.getGifArray(window.location.href.split('=').pop(), env.GIF_LIMIT, 0);
        }

        this._createContentContainer(this.gifsData, linkWrapper); // createhref = element from routers
        let input = document.getElementById('search-input');
        this._disableButton(input);

        document.getElementById('load-btn').addEventListener('click', async () => {  // replace 
            this.offsetValue = this.offsetValue + env.OFFSET;
            const tempData = await this.gifAPI.getGifArray(window.location.href.split('=').pop(), env.GIF_LIMIT, this.offsetValue);
            this.gifsData = [...this.gifsData, ...tempData];     
            this.router.changeRoute(this.renderElements);   
        });
        this.router.backButtonListener(this.renderElements);
    };
    
    _renderGifInfoPage = async (backButtonHandler) => {
        this._createGifContainer(backButtonHandler);
    };


    _createSearchContainer = () => {
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

    _createContentContainer = (gifData, linkWrapper) => { //replace createHref with method from router
        let container = document.getElementById('container');
        let contentContainer = document.createElement('div');
        let loadButton = document.createElement('button');
        contentContainer.classList.add('content-container');
        gifData.forEach((item) => {
            let a = linkWrapper(item, this.renderElements);
            let img = document.createElement('img');
            img.src = item.previewImgURL;
            a.appendChild(img);
            contentContainer.appendChild(a);
        });
        loadButton.id = 'load-btn';
        loadButton.innerHTML = 'more gifs...';  
        container.appendChild(contentContainer);
        container.appendChild(loadButton);
    };

    _createGifContainer = async (backButtonHandler) => {
        let container = document.getElementById('container');
        let gifId = window.location.href.split('/').pop();
        let gifElement = await this.gifAPI.getSingleGif(gifId);
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
        datePublished.innerHTML = `Published: ${gifElement.postDate.split(' ')[0]}`;     
        if (gifElement.username !== '') {
            infoContainer.appendChild(avatar);
            infoContainer.appendChild(username);
        }    
        infoContainer.appendChild(datePublished);
        backButton.onclick = () => {
            backButtonHandler(this.renderElements);
        };
        backButton.innerHTML = 'go back';
        backButton.id = 'back-btn';    
        gifImage.src = gifElement.originalImgURL;
        gifContainer.classList.add('gif-container');
        gifContainer.appendChild(gifImage);    
        infoContainer.classList.add('info-container');
        gifContainer.appendChild(infoContainer);
        gifContainer.appendChild(backButton);
        container.innerHTML = '';
        container.appendChild(gifContainer);
    };

    renderElements = async () => {
        let state = this.router.detectCurrentPage();
        if(state === env.FRONT_PAGE) { 
            this._renderFrontPage();
        }
        if(state === env.SEARCH_PAGE) {
            this._renderSearchPage(this.router.createLinkWrapper);
        }
        if (state === env.GIF_PAGE) {        
            this._renderGifInfoPage(this.router.goToDefaultUrl);
        }
    };
}

export default Render;