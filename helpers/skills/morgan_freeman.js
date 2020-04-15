const utils = require('../utils');
const slack = require('../slack');

module.exports = {
    listen: function (controller) {
        controller.hears(listenOnWords(),
            'message,direct_message',
            async (bot, message) => {

                // 1. React first
                await slack.reactWithEmoji(bot, message, getEmoji())

                // 2. Add GIF
                let msg = await slack.getImgMessageBlock(await getGifImgUrl("morganfreeman"), "Morgan Freeman 😄")
                await bot.replyInThread(message, msg);
            });
    }
}

function listenOnWords() {
    return ['morgan', 'morgen']
}

function getEmoji() {
    const emojiList = ['wave']
    const randomEmoji = utils.getRandomItemFromArray(emojiList)
    return [randomEmoji]
}

async function getGifImgUrl(keyword) {
    const urlForGiphyApi = "https://api.giphy.com/v1/gifs/random?api_key="
        + process.env.GIPHY_API_KEY
        + "&tag=" + keyword + "&rating=g"

    const response = await utils.getData(urlForGiphyApi)
    return response.data.images.downsized_large.url
}