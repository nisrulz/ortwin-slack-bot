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
                let msg = await slack.getImgMessageBlock(await utils.getGifImgUrl("morganfreeman"), "Morgan Freeman 😄")
                await bot.replyInThread(message, msg);
            });
    }
}

function listenOnWords() {
    return ['morgan', 'morgen']
}

function getEmoji() {
    const emojiList = ['pikachu_wave', 'wave', '1up', 'bigsmile', 'boop', 'coin', 'cookie_monster',
    'cool-doge', 'fidget_spinner', 'kirby', 'jigglypuff', 'nyancat_big']
    const randomEmoji = utils.getRandomItemFromArray(emojiList)
    return [randomEmoji]
}