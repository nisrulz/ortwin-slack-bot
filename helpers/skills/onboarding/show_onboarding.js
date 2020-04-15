const listOLinks = require('./links');

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
    return ['onboarding']
}

function msg() {
    var msgStr = ""
    listOLinks().forEach(link => {
        msgStr += "\n" + link.title + "\n" + link.url

    })
    return msgStr
}