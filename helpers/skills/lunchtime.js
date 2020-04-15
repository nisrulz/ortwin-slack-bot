const utils = require('../utils');
const slack = require('../slack');

module.exports = {
    listen: function (controller) {
        controller.hears(listenOnWords(),
            'message,direct_message',
            async (bot, message) => {
                if(utils.shouldExecute()){
                    await slack.reactWithEmoji(bot, message, getEmoji())
                }
            });
    }
}

function listenOnWords() {
    return [
        'lunch', 'lunchtime', 'afl', 'lunchin', 'nom nom', 'lunch time', 'off for lunch',
    ]
}

function getEmoji() {
    const emojiList = ['cake', 'pancakes', 'hamburger', 'pizza', 'ramen', 'curry', 'fries', 'cookie', 'stew']
    const randomEmoji = utils.getRandomItemFromArray(emojiList)
    return [randomEmoji]
}