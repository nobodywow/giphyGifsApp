import BaseApi from './BaseApi.js';
import { env } from './../cfg/env.js';

class GiphyApi extends BaseApi {

    createUrlForKeyword = (keyword, limit, offset) => {
        return `${env.BASE_URL}search?q=${keyword.replace(' ', '+')}&api_key=${env.API_KEY}&limit=${limit}&offset=${offset}`;                 
    };

    createUrlForId = (id) => {
        return `${env.BASE_URL}${id}?api_key=${env.API_KEY}`;
    };

    gifObject = (gifData) => {
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
        return this.gifObject(gifData.data);
    };

    mapGifArray = (gifData) => {
        let dataArray = gifData.data.map((item) => {
            return this.gifObject(item);
        });
        return dataArray;
    };
}

export default GiphyApi;
