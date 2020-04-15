const utils = require('../utils');
const slack = require('../slack');

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
    return ['xkcd']
}

async function msg() {
    const url = "https://xkcd.com/info.0.json"
    let response = await utils.getData(url)
    let imgUrl = response.img
    let titleText = response.safe_title
    let msg = await slack.getImgMessageWithTextBlock(imgUrl, titleText)
    return msg
}
