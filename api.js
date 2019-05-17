const API_KEY = 'GJ3cFTvnDd8Qu2U0fB5feCKamyvnrarm';

const createKeyWordURL = (keyWords) => {
    return keyWords.split(' ').join('+');    
}


const gifInfoProcessing = (gifData) => {
    let dataObject = {};
    dataObject.id = gifData.data.id
    dataObject.title = gifData.data.title;
    dataObject.username = gifData.data.username;
    dataObject.avatarURL = gifData.data.username ? gifData.data.user.avatar_url : '';
    dataObject.postDate = gifData.data.import_datetime;
    dataObject.previewImgURL = gifData.data.images.fixed_height_small.url;
    dataObject.originalImgURL = gifData.data.images.original.url;
    return dataObject;
}

const queryProcessing = (gifData, dataArray) => {
    dataArray = gifData.data.map((item) => {
        let dataObject = {};
        dataObject.id = item.id;
        dataObject.title = item.title;
        dataObject.username = item.username;
        dataObject.avatarURL = item.username ? item.user.avatar_url : '';
        dataObject.postDate = item.import_datetime;
        dataObject.previewImgURL = item.images.fixed_height_small.url;
        dataObject.originalImgURL = item.images.original.url;
        return dataObject;
        // gifInfoProcessing(item);
    });
    return dataArray;
}

// to fix keyword
export const fetchData = async (keyWord, dataArray) => {
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/search?q=${createKeyWordURL(keyWord)}&api_key=${API_KEY}&limit=20`).then(response => response.json());
    console.log(giphyResponse);
    dataArray = queryProcessing(giphyResponse, dataArray);
    console.log(dataArray);
    return [ dataArray, createKeyWordURL(keyWord) ];
}

export const fetchSingleGifData = async (ID) => {
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/${ID}?api_key=${API_KEY}`).then(response => response.json());
    return gifInfoProcessing(giphyResponse);
}