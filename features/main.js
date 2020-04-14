// ---------------------------------- Dependencies ---------------------------------- //
const r2 = require('r2');

// ---------------------------------- Controller ---------------------------------- //
module.exports = function (controller) {

    controller.hears(['morgan', 'morgen'],
        'message,direct_message',
        async (bot, message) => {
            // 1. React first
            await goodMorningReactions(bot, message)
            // 2. Add GIF
            await getRandomGif(bot, message, "morganfreeman")

        });

    controller.hears(['Good Morning', 'guten morgen', 'morning', 'Moin',],
        'message,direct_message',
        async (bot, message) => {
            await goodMorningReactions(bot, message)
        });

    controller.hears(['bye', 'done for today', 'Good Bye', 'goodbye', 'see you tomorrow', 'signing of for today!',
        'See everyone tomorrow', 'see you all tomorrow', 'Schönenfeierabend', 'Have a nice evening everyone',
        'Schoenenfeierabend', 'Have a nice weekend everyone!', 'See you later'],
        'message,direct_message',
        async (bot, message) => {
            await goodByeReactions(bot, message)
        });


    controller.hears(['hi', 'hello', 'identify yourself', 'who are you', 'what is your name'],
        'direct_message,direct_mention,mention',
        async (bot, message) => {
            await whoAmI(bot, message)
        });

    controller.hears(['programming quote'],
        'direct_message,direct_mention,mention',
        async (bot, message) => {
            await programmingQuotes(bot, message)
        });

    controller.hears(['xkcd'],
        'direct_message,direct_mention,mention',
        async (bot, message) => {
            await xkcdComic(bot, message)
        });

    controller.hears(['weather for berlin', 'weather'],
        'direct_message,direct_mention,mention',
        async (bot, message) => {
            await weatherReport(bot, message, "berlin")
        });
}

// ---------------------------------- Skills ---------------------------------- //
async function goodByeReactions(bot, message) {
    console.log("Skill Exec: goodByeReactions");
    const emojiList = ['wave']
    await reactWithEmoji(bot, message, emojiList)
}

async function goodMorningReactions(bot, message) {
    console.log("Skill Exec: goodMorningReactions");
    const emojiList = ['pikachu_wave', 'wave', '1up', 'bigsmile', 'boop', 'coin', 'cookie_monster', 
    'cool-doge','fidget_spinner', 'kirby', 'jigglypuff', 'nyancat_big']
    const randomEmoji = getRandomItemFromArray(emojiList)
    const reactEmojiList = [randomEmoji]
    await reactWithEmoji(bot, message, reactEmojiList)
}
async function getRandomGif(bot, message, keyword) {
    console.log("Skill Exec: getRandomGif");
    const urlForGiphyApi = "https://api.giphy.com/v1/gifs/random?api_key=" + process.env.GIPHY_API_KEY + "&tag=" + keyword + "&rating=g"
    let response = await getData(urlForGiphyApi)
    let gifUrl = response.data.images.downsized_large.url
    let imgMessage = await getImgMessageBlock(gifUrl, "Morgan Freeman 😄")
    await bot.replyInThread(message, imgMessage);
}

async function whoAmI(bot, message) {
    console.log("Skill Exec: whoAmI");
    bot.reply(message, 'Hello :pikachu_wave:\nMy name is Ortwin and I am a slack bot built by Nishant Srivastava 😊');
}

async function programmingQuotes(bot, message) {
    console.log("Skill Exec: programmingQuotes");
    const url = "https://programming-quotes-api.herokuapp.com/quotes/random"
    let response = await getData(url)
    let titleText = response.en + "\n - " + response.author
    let imgMessage = await getTextMessageBlock(titleText)
    bot.reply(message, imgMessage);
}

async function xkcdComic(bot, message) {
    console.log("Skill Exec: xkcdComic");
    const url = "https://xkcd.com/info.0.json"
    let response = await getData(url)
    let imgUrl = response.img
    let titleText = response.safe_title
    let msg = await getImgMessageWithTextBlock(imgUrl, titleText)
    bot.reply(message, msg);
}

async function weatherReport(bot, message, city) {
    console.log("Skill Exec: weatherReport");
    const baseUrl = "https://www.metaweather.com/api/location/"
    let getCityIdRes = await getData(baseUrl + "search/?query=" + city)
    let cityId = getCityIdRes[0].woeid
    let cityName = getCityIdRes[0].title

    let getCityWeatherRes = await getData(baseUrl + cityId)
   
    const weather = getCityWeatherRes.consolidated_weather[0]
    var weatherData = "Today's weather forecast for " + cityName
        + '\n 🔮 ' + weather.weather_state_name
        + '\n 🌡 Min Temp = ' + round(weather.min_temp,1)+"°C"
        + '\n 🌡 Max Temp = ' + round(weather.max_temp,1)+"°C"
        + '\n 🌡 Current Temp = ' + round(weather.the_temp,1)+"°C"
        + '\n 💨 Windspeed = ' + round(weather.wind_speed,1)+"mph"
        + '\n 💧 Humidity = ' + round(weather.humidity,1)+"%" + "\n"

    let msg = await getTextMessageBlock(weatherData)
    bot.reply(message, msg);
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

async function getData(url) {
    try {
        const response = await r2(url).json;
        return response
    } catch (error) {
        console.log(error);
    }
}

async function getTextMessageBlock(title) {
    let msg = {
        "blocks": [
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": title,
                    "emoji": true
                }
            }
        ]
    }
    return msg
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

async function getImgMessageWithTextBlock(url, title) {
    let msg = {
        "blocks": [
            {
                "type": "divider"
            },
            {
                "type": "image",
                "title": {
                    "type": "plain_text",
                    "text": "Image",
                    "emoji": true
                },
                "image_url": url,
                "alt_text": "Image"
            },
            {
                "type": "section",
                "text": {
                    "type": "plain_text",
                    "text": title,
                    "emoji": true
                }
            }
        ]
    }
    return msg
}

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function getRandomItemFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}