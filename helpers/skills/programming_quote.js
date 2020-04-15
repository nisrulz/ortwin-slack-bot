const utils = require('../utils');

module.exports = {
    listen: function (controller) {
        controller.hears(listenOnWords(),
            'direct_message,direct_mention,mention',
            async (bot, message) => {
                await bot.reply(message, await msg());
            });
    }
}

function listenOnWords() {
    return ['programming quote']
}

async function msg() {
    const url = "https://programming-quotes-api.herokuapp.com/quotes/random"
    let response = await utils.getData(url)
    return response.en + "\n - " + response.author
}