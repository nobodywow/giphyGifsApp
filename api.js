const API_KEY = 'GJ3cFTvnDd8Qu2U0fB5feCKamyvnrarm';

const createKeyWordURL = (keyWords) => {
    return keyWords.split(' ').join('+');    
}

const createGifDataObject = (dataObject, gifData) => {
    dataObject.id = gifData.id
    dataObject.title = gifData.title;
    dataObject.username = gifData.username;
    dataObject.avatarURL = gifData.username ? gifData.user.avatar_url : '';
    dataObject.postDate = gifData.import_datetime;
    dataObject.previewImgURL = gifData.images.fixed_height_small.url;
    dataObject.originalImgURL = gifData.images.original.url;
    return dataObject;
}

const gifInfoProcessing = (gifData) => {
    let dataObject = {};
    return createGifDataObject(dataObject, gifData.data);
}

const gifsArrayProcessing = (gifData, dataArray) => {
    dataArray = gifData.data.map((item) => {
        let dataObject = {};
        return createGifDataObject(dataObject, item);
    });
    return dataArray;
}

export const fetchGifArrayData = async (keyWord, dataArray) => {
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/search?q=${createKeyWordURL(keyWord)}&api_key=${API_KEY}&limit=20`).then(response => response.json());
    dataArray = gifsArrayProcessing(giphyResponse, dataArray);
    return [ dataArray, createKeyWordURL(keyWord) ];
}

export const fetchSingleGifData = async (ID) => {
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/${ID}?api_key=${API_KEY}`).then(response => response.json());
    return gifInfoProcessing(giphyResponse);
}