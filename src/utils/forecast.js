const request = require("postman-request");
const chalk = require("chalk");

// --------------------------------------------------------------------------------------------------------
// Challenge 18 : Create a Resulable function to get the Weather Forecast for given LAT - LONG
// --------------------------------------------------------------------------------------------------------

const forecast = (lat, long, callback) => {
    const weatherUrl =
        "http://api.weatherstack.com/current?access_key=e50bf19f8bccdc77b9a19892c1169a1f&query=" +
        encodeURIComponent(lat) +
        "," +
        encodeURIComponent(long) +
        "&units=m";

    request({ url: weatherUrl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to Forecast Services !", undefined);
        } else if (response.body.error === 0) {
            callback("Unable to Find Location!", undefined);
        } else {
            callback(undefined, {
                location: response.body.location.region,
                temperature: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                humidity: response.body.current.humidity,
                weather: response.body.current.weather_descriptions[0],
            });
        }
    });
};

module.exports = forecast;
