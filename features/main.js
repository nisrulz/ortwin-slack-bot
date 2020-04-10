// ---------------------------------- Dependencies ---------------------------------- //
const r2 = require('r2');

// ---------------------------------- Controller ---------------------------------- //
module.exports = function (controller) {

    controller.hears(['morgan', 'morgen'], 'message,direct_message', async (bot, message) => {
        // 1. React first
        await goodMorningReactions(bot, message)
        // 2. Add GIF
        await getRandomGif(bot, message, "morganfreeman")
        
    });

    controller.hears(['Good Morning', 'guten morgen', 'morning', 'Moin',], 'message,direct_message', async (bot, message) => {
        await goodMorningReactions(bot, message)
    });

    controller.hears(['bye', 'done for today', 'Good Bye', 'goodbye', 'see you tomorrow', 'signing of for today!',
        'See everyone tomorrow', 'see you all tomorrow', 'Schönenfeierabend', 'Have a nice evening everyone',
        'Schoenenfeierabend', 'Have a nice weekend everyone!', 'See you later'], 'message,direct_message', async (bot, message) => {
            await goodByeReactions(bot, message)
        });
}

// ---------------------------------- Skills ---------------------------------- //
async function goodByeReactions(bot, message) {
    console.log("Skill Exec: goodByeReactions");
    let emojiList = ['wave']
    await reactWithEmoji(bot, message, emojiList)
}

async function goodMorningReactions(bot, message) {
    console.log("Skill Exec: goodMorningReactions");
    let emojiList = ['pikachu_wave', 'wave']
    await reactWithEmoji(bot, message, emojiList)
}
async function getRandomGif(bot, message, keyword) {
    console.log("Skill Exec: getRandomGif");
    const urlForGiphyApi = "https://api.giphy.com/v1/gifs/random?api_key=" + process.env.GIPHY_API_KEY + "&tag=" + keyword + "&rating=g"
    let response = await getData(urlForGiphyApi)
    let gifUrl = response.data.images.downsized_large.url
    let imgMessage = await getImgMessageBlock(gifUrl, "Morgan Freeman 😄")
    await bot.replyInThread(message, imgMessage);
}

// ---------------------------------- Utils ---------------------------------- //
async function reactWithEmoji(bot, message, emojiList) {
    return emojiList.forEach(emoji => {
        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: emoji,
        }, function (err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });
    })
}

async function getImgMessageBlock(url, title) {
    let imgMessage = {
        "blocks": [
            {
                "type": "image",
                "title": {
                    "type": "plain_text",
                    "text": title,
                    "emoji": true
                },
                "image_url": url,
                "alt_text": title
            }
        ]
    }
    return imgMessage
}

async function getData(url) {
    try {
        const response = await r2(url).json;
        return response
    } catch (error) {
        console.log(error);
    }
}