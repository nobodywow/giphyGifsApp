class DataService { // remove and replace with api
    constructor(gifApi) {
        this.QUERY_CONSTS = {
            GIF_LIMIT: 5,
        };
        this.gifApi = gifApi;
    }

    getDataArray = async (offset, keyword) => {
        let responseData = [];
        responseData = await this.gifApi.getGifArray(keyword, this.QUERY_CONSTS.GIF_LIMIT, offset);
        return responseData;
    };

    getDataObject = async (gifId) => {
        let gifElement = await this.gifApi.getSingleGif(gifId);
        return gifElement;
    };
}

export default DataService;