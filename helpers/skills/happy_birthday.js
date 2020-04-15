const utils = require('../utils');

module.exports = {
    listen: function (controller) {
        controller.hears(listenOnWords(),
            'direct_message,direct_mention,mention',
            async (bot, message) => {
                await bot.replyInThread(message, msg());
            });
    }
}

function listenOnWords() {
    return ['happy birthday', 'happybirthday', 'hapy birthday']
}

function msg() {
    const listOfMsg = [
        "Wishing you a Happpiieee Birthday 🎉😊🧁🥳",
        "Happpiieee Birthday 🎉🥳",
    ]
    return utils.getRandomItemFromArray(listOfMsg)
}