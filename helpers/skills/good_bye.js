const utils = require('../utils');
const slack = require('../slack');

module.exports = {
    listen: function (controller) {
        controller.hears(listenOnWords(),
            'message,direct_message',
            async (bot, message) => {
                await slack.reactWithEmoji(bot, message, getEmoji())
            });
    }
}

function listenOnWords() {
    return [
        'bye', 'done for today', 'Good Bye', 'goodbye', 'see you tomorrow', 'signing of for today!', 'I’m out of here',
        'See everyone tomorrow', 'see you all tomorrow', 'Schönenfeierabend', 'Have a nice evening everyone',
        'Schoenenfeierabend', 'Have a nice weekend everyone!', 'See you later', 'Signing off for the day', 'I can leave',
        'leaving now', 'G0od bY3', 'Have a good evening', 'Schoenenfeireabend', 'C you all', 'Cya', 'See you all',
        'বিদায়', 'ciao', 'adios', 'अलविदा', 'Hoşçakal', 'Schönes Wochenende', 'Logging off', 'Have a nice extended weekend',
        'have a nice weekend', 'I am off', 'Done for the week', 'Done for the day', 'Done for today', ':wave:', 'Catch you all tomorrow',
        'Schönen Feierabend', 'Bis morgen'
    ]
}

function getEmoji() {
    const emojiList = ['wave', 'runner', 'sonic', 'nyancat_big', 'fidget_spinner']
    const randomEmoji = utils.getRandomItemFromArray(emojiList)
    return [randomEmoji]
}