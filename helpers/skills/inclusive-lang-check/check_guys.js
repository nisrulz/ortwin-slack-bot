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
        "you guys", "these guys", "my guys", "those guys",
        "hey guys", "hi guys", "the guys", "these guys",
        "thanks guys", "hello guys", "you guyz", "these guyz",
        "my guyz", "those guyz", "hey guyz", "hi guyz",
        "the guyz", "these guyz", "thanks guyz", "hello guyz",
        "you guyss", "these guyss", "my guyss", "those guyss",
        "hey guyss", "hi guyss", "the guyss", "these guyss",
        "thanks guyss", "hello guyss"
    ]
}

function msg() {
    const listOfPossibleResponses = [
        "perhaps you mean *pals*?",
        "perhaps you mean *crew*?",
        "perhaps you mean *people*?",
        "perhaps you mean *everyone*?", ,
        "perhaps you mean *folks*?",
        "have you considered a more gender-neutral pronoun like *folks*?",
        "perhaps you mean *friends*?",
        "perhaps you mean *group*?",
        "perhaps you mean *coworkers*?",
        "perhaps you mean *colleagues*?",
        "perhaps you mean *all*?",
        "perhaps you mean *team*?",
        "perhaps you mean *honoured mortals*?",
        "perhaps you mean *biscuitheads*?",
    ]
    let finalMessage = "Instead of *guys*, "
        + utils.getRandomItemFromArray(listOfPossibleResponses)
        + "... *[Please consider editing your message so it's more inclusive]*"
    return finalMessage
}