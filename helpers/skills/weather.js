const utils = require('../utils');

module.exports = {
    listen: function (controller) {
        controller.hears(listenOnWords(),
            'direct_message,direct_mention,mention',
            async (bot, message) => {
                await bot.reply(message, await msg());
            });
    }
}

function listenOnWords() {
    return ['weather for berlin', 'weather', 'weather today',]
}

async function msg() {
    return await getWeatherInfo("berlin")
}

async function getWeatherInfo(city) {
    const baseUrl = "https://www.metaweather.com/api/location/"
    let getCityIdRes = await utils.getData(baseUrl + "search/?query=" + city)
    let cityId = getCityIdRes[0].woeid
    let cityName = getCityIdRes[0].title

    let getCityWeatherRes = await utils.getData(baseUrl + cityId)

    const weather = getCityWeatherRes.consolidated_weather[0]
    var weatherData = "Today's weather forecast for *" + cityName + "*"
        + '\n 🔮 ' + weather.weather_state_name
        + '\n 🌡 Min Temp = ' + utils.round(weather.min_temp, 1) + "°C"
        + '\n 🌡 Max Temp = ' + utils.round(weather.max_temp, 1) + "°C"
        + '\n 🌡 Current Temp = ' + utils.round(weather.the_temp, 1) + "°C"
        + '\n 💨 Windspeed = ' + utils.round(weather.wind_speed, 1) + "mph"
        + '\n 💧 Humidity = ' + utils.round(weather.humidity, 1) + "%" + "\n"
    return weatherData
}
