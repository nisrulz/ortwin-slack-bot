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
    return ['hi', 'hello', 'identify yourself', 'who are you', 'what is your name', 'Waddup', 'wassup', 'howdy', 'heyo']
}

function msg() {
    return 'Hello :pikachu_wave:\nMy name is Ortwin and I am your point friend in this slack workspace 😊'
}