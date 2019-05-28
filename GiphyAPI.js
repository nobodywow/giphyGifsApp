import BaseAPI from './BaseAPI.js';
import { env } from './env.js';

class GiphyAPI extends BaseAPI {

    createQueryUrlForKeyword = (keyword, limit, offset) => {
        return `${env.BASE_URL}search?q=${keyword.replace(' ', '+')}&api_key=${env.API_KEY}&limit=${env.GIF_LIMIT}&offset=${offset}`;                 
    };

    createQueryUrlForId = (ID) => {
        return `${env.BASE_URL}${ID}?api_key=${env.API_KEY}`;
    };

    createGifDataObject = (gifData) => {
        let dataObject = {};
        dataObject.id = gifData.id
        dataObject.title = gifData.title;
        dataObject.username = gifData.username;
        dataObject.avatarURL = gifData.username ? gifData.user.avatar_url : '';
        dataObject.postDate = gifData.import_datetime;
        dataObject.previewImgURL = gifData.images.fixed_height_small.url;
        dataObject.originalImgURL = gifData.images.original.url;
        return dataObject;
    };

    mapSingleGif = (gifData) => {
        return this.createGifDataObject(gifData.data);
    };

    mapGifArray = (gifData) => {
        let dataArray = gifData.data.map((item) => {
            return this.createGifDataObject(item);
        });
        return dataArray;
    };
}

export default GiphyAPI;