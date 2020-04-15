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
    return ['Good Morning', 'guten morgen', 'morning', 'Moin', 'Mornin', 'goedemorgen',
        'Goeiemôre, Môre', 'Mirëmëngjes', 'صباح الخير', 'shuprobhat', 'zǎoān', 'Goede morgen', 'gutenmorgen',
        'GoodMorning', 'GoodMoin', 'GoodMornin', 'GudMorning', 'GudMornin', 'GudMoin', 'Gud Mornin',
        'g00d m0rning', 'Tere hommikust', 'Bonjour', 'Kaliméra', 'Aloha', 'Namaste', 'Buongiorno', 'God morgen',
        'Bună dimineaţa', 'God morgon', 'Buenos días', 'Buenos dias', 'Günaydın', 'Gunaydın', 'صبح بخير', 'Bore da',
        'Good morning everyone', 'नमस्ते'
    ]
}

function getEmoji() {
    const emojiList = ['pikachu_wave', 'wave', '1up', 'bigsmile', 'boop', 'coin', 'cookie_monster',
        'cool-doge', 'fidget_spinner', 'kirby', 'jigglypuff', 'nyancat_big']
    const randomEmoji = utils.getRandomItemFromArray(emojiList)
    return [randomEmoji]
}