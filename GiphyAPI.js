import BaseAPI from './BaseAPI.js';
import { env } from './env.js';

class GiphyAPI extends BaseAPI {

    constructor() {
        super();
    }

    createQueryURLForKeyword = (keyword) => {
        let queryURL = `${env.BASE_URL}search?q=${keyword.split(' ').join('+')}&api_key=${env.API_KEY}&limit=20`;
        return queryURL;                        
    };

    createQueryURLForId = (ID) => {
        let queryURL = `${env.BASE_URL}${ID}?api_key=${env.API_KEY}`;
        return queryURL;
    };

    createGifDataObject = (dataObject, gifData) => {
        dataObject.id = gifData.id
        dataObject.title = gifData.title;
        dataObject.username = gifData.username;
        dataObject.avatarURL = gifData.username ? gifData.user.avatar_url : '';
        dataObject.postDate = gifData.import_datetime;
        dataObject.previewImgURL = gifData.images.fixed_height_small.url;
        dataObject.originalImgURL = gifData.images.original.url;
        return dataObject;
    };

    mapSingleGifData = (gifData) => {
        let dataObject = {};
        return this.createGifDataObject(dataObject, gifData.data);
    };

    mapGifArrayData = (gifData) => {
        let dataArray = gifData.data.map((item) => {
            let dataObject = {};
            return this.createGifDataObject(dataObject, item);
        });
        return dataArray;
    };
}

export default GiphyAPI;