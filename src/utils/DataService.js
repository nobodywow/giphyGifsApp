class DataService { // remove and replace with api
    constructor(gifAPI) {
        this.QUERY_CONSTS = {
            GIF_LIMIT: 5,
            OFFSET: 5,
        };
        this.gifAPI = gifAPI;
    }

    getDataArray = async (offset, keyword) => {
        let responseData = [];
        responseData = await this.gifAPI.getGifArray(keyword, this.QUERY_CONSTS.GIF_LIMIT, offset);
        return responseData;
    };

    getDataObject = async (gifId) => {
        let gifElement = await this.gifAPI.getSingleGif(gifId);
        return gifElement;
    };
}

export default DataService;