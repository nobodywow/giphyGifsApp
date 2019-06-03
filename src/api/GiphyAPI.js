import BaseApi from './BaseAPI.js';
import { env } from './../cfg/env.js';

class GiphyApi extends BaseApi {

    createQueryUrlForKeyword = (keyword, limit, offset) => {
        return `${env.BASE_URL}search?q=${keyword.replace(' ', '+')}&api_key=${env.API_KEY}&limit=${limit}&offset=${offset}`;                 
    };

    createQueryUrlForId = (id) => {
        return `${env.BASE_URL}${id}?api_key=${env.API_KEY}`;
    };

    createGifDataObject = (gifData) => {
        let dataObject = {};
        dataObject.id = gifData.id
        dataObject.title = gifData.title;
        dataObject.username = gifData.username;
        dataObject.avatarUrl = gifData.username ? gifData.user.avatar_url : '';
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

export default GiphyApi;