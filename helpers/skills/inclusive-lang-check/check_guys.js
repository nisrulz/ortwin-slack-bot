const utils = require('../../utils');

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
    return [
        "you guys", "these guys", "my guys", "those guys", "hey guys", "hi guys", "the guys", "these guys", "thanks guys", "hello guys",
        "you guyz", "these guyz", "my guyz", "those guyz", "hey guyz", "hi guyz", "the guyz", "these guyz", "thanks guyz", "hello guyz",
        "you guyss", "these guyss", "my guyss", "those guyss", "hey guyss", "hi guyss", "the guyss", "these guyss", "thanks guyss", "hello guyss"
    ]
}

function msg() {
    const listOfTypesOfResponses = [
        "perhaps you mean *",
        "have you considered a more gender-neutral pronoun like *"
    ]
    const listOfPossibleResponses = [
        "pals",
        "crew",
        "people",
        "everyone", ,
        "folks",
        "friends",
        "group",
        "coworkers",
        "colleagues",
        "all",
        "team",
        "honoured mortals",
        "biscuitheads",
    ]
    let finalMessage = "Instead of *guys*, "
        + utils.getRandomItemFromArray(listOfTypesOfResponses)
        + utils.getRandomItemFromArray(listOfPossibleResponses)
        + "*?... *[Please consider editing your message so it's more inclusive]*"
    return finalMessage
}