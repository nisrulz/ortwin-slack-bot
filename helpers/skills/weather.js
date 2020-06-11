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

function getData(info) {
    return utils.round(info, 1)
}

async function getWeatherInfo(city) {
    const baseUrl = "https://www.metaweather.com/api/location/"
    let getCityIdRes = await utils.getData(baseUrl + "search/?query=" + city)
    let cityId = getCityIdRes[0].woeid
    let cityName = getCityIdRes[0].title

    let getCityWeatherRes = await utils.getData(baseUrl + cityId)

    const weather = getCityWeatherRes.consolidated_weather[0]
    const windSpeedKmph = (getData(weather.wind_speed) * 1.609)

    var weatherData = "Today's weather forecast for *" + cityName + "*"
        + '\n 🔮 ' + weather.weather_state_name
        + '\n 🌡 Min Temp = ' + getData(weather.min_temp) + "°C"
        + '\n 🌡 Max Temp = ' + getData(weather.max_temp) + "°C"
        + '\n 🌡 Current Temp = ' + getData(weather.the_temp) + "°C"
        + '\n 💨 Windspeed = ' + getData(weather.wind_speed) + "kmph"
        + '\n 💧 Humidity = ' + getData(weather.humidity) + "%" + "\n"
    return weatherData
}
