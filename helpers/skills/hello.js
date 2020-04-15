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
    return ['hi', 'hello', 'identify yourself', 'who are you', 'what is your name', 'Waddup', 'wassup', 'howdy', 'heyo', 'yo']
}

function msg() {
    return 'Hello :pikachu_wave:\nMy name is Ortwin and I am a slack bot built by Nishant Srivastava 😊'
}