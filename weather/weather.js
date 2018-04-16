const request = require('request');

const getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/4253ca9e61f91bd31a62a708b68803fe/${latitude},${longitude}`,
        json: true,
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        }
    });
};

module.exports.getWeather = getWeather;
