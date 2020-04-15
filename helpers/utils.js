
const r2 = require('r2');

module.exports = {
    getRandomItemFromArray: function (array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    round: function (value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    },

    getData: async function (url) {
        try {
            const response = await r2(url).json;
            return response
        } catch (error) {
            console.log(error);
        }
    },

    getGifImgUrl: async function (keyword) {
        const urlForGiphyApi = "https://api.giphy.com/v1/gifs/random?api_key="
            + process.env.GIPHY_API_KEY
            + "&tag=" + keyword + "&rating=g"

        let response = await getData(urlForGiphyApi)
        return response.data.images.downsized_large.url
    }
}

