const listOfLinks = require('./links');

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
    return ['faq']
}

function msg() {
    var msgStr = ""
    listOfLinks().forEach(link => {
        msgStr += "\n" + link.title + "\n" + link.url

    })
    return msgStr
}