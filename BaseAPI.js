class BaseAPI {

    getGifArray = async (keyword, limit, offset) => {
        let queryUrl = this.createQueryUrlForKeyword(keyword, limit, offset);
        const apiResponse = await fetch(queryUrl).then(response => response.json());
        return this.mapGifArray(apiResponse);
    };

    getSingleGif = async (Id) => {
        let queryUrl = this.createQueryUrlForId(Id);
        const apiResponse = await fetch(queryUrl).then(response => response.json());
        return this.mapSingleGif(apiResponse);
    };    
    
}

export default BaseAPI;