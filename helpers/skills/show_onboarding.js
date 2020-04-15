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
    const listOLinks = [
        { "title": "Title 1", "url": "https://www.google.com" },
        { "title": "Title 2", "url": "https://www.google.com" },
        { "title": "Title 3", "url": "https://www.google.com" }
    ]

    var msgStr = ""
    listOLinks.forEach(link => {
        msgStr += "\n" + link.title + "\n" + link.url

    })
    return msgStr
}