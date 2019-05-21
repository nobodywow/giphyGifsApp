class BaseAPI {

    constructor() {}

    fetchGifArrayData = async (keyword) => {
        let queryURL = this.createQueryURLForKeyword(keyword);
        const apiResponse = await fetch(queryURL).then(response => response.json());
        return this.mapGifArrayData(apiResponse);
    };

    fetchSingleGifData = async (Id) => {
        let queryURL = this.createQueryURLForId(Id);
        const apiResponse = await fetch(queryURL).then(response => response.json());
        return this.mapSingleGifData(apiResponse);
    };    
    
}

export default BaseAPI;