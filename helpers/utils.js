
const r2 = require('r2');

module.exports = {
    getRandomItemFromArray: function (array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    shouldExecute: function () {
        return ((Math.floor(Math.random() * 99))%2 == 0);
    },

    round: function (value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    },

    getData: async function (url) {
        try {
            // Response
            return await r2(url).json;
        } catch (error) {
            console.log(error);
        }
    },
}

