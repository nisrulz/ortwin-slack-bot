const utils = require('../utils');

module.exports = {
    listen: function (controller) {
        controller.hears(listenOnWords(),
            'direct_message,direct_mention,mention',
            async (bot, message) => {
                await bot.reply(message, msg());
            });
    }
}

function listenOnWords() {
    return ['Thank you', 'thanks', 'thanx']
}

function msg() {
    const listOfDays = ['You are welcome 😊', 'Happy to help 😊']
    return utils.getRandomItemFromArray(listOfDays)
}