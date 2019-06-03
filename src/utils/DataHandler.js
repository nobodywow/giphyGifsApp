class DataHandler {

    constructor(gifsData, offsetValue, gifAPI) {
        this.QUERY_CONSTS = {
            GIF_LIMIT: 5,
            OFFSET: 5,
        };
        this.gifsData = gifsData;
        this.offsetValue = offsetValue;
        this.gifAPI = gifAPI;
    }

    updateDataArray = async () => {
        let responseData = [];
        if (this.gifsData.length === 0) {
            responseData = await this.gifAPI.getGifArray(window.location.href.split('=').pop(), this.QUERY_CONSTS.GIF_LIMIT, 0);
        } else {
            this._offsetIncrement();
            responseData = await this.gifAPI.getGifArray(window.location.href.split('=').pop(), this.QUERY_CONSTS.GIF_LIMIT, this.offsetValue);            
        }
        this.gifsData = [...this.gifsData, ...responseData];
        return this.gifsData;
    };

    updateDataObject = async () => {
        let gifId = window.location.href.split('/').pop();
        let gifElement = await this.gifAPI.getSingleGif(gifId);
        return gifElement;
    };

    _offsetIncrement = () => {
        this.offsetValue = this.offsetValue + this.QUERY_CONSTS.OFFSET;
    };

    clearData = () => {
        this.gifsData = [];
        this.offsetValue = 0;
    };
}

export default DataHandler;