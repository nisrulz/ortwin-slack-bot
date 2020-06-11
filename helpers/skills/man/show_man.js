const listOfCommands = require('./cmds');

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
    return ['man']
}

function msg() {
    var msgStr = ""
    listOfCommands().forEach(link => {
        msgStr += "\n- " + link.cmd + ": " + link.desc

    })
    return msgStr
}