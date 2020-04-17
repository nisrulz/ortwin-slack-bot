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
    return ['what day is it', 'today is?']
}

function msg() {
    const listOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        'Sunday', 'Thisday', 'Thatday', 'Friyay', 'Funday', 'Have-a-🌮-day', '🍕Day', 'Sameday',
        'Who-cares-day', 'Beautifulday', 'You-are-awesome-day', 'Anotherday', 'April 20, 2021',
        'May-the-4th-be-with-you', 'Goodday', 'Appreciate-Ortwin-Day 😉', 'Happy Day', 'You-can-do-it-day']
    return utils.getRandomItemFromArray(listOfDays)
}