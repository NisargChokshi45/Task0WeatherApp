const forecast = require("../../utils/forecast");

const forecastController = async (req, res, geoData, next) => {
    try {
        await forecast(
            geoData.latitude,
            geoData.longitude,
            (error, forecastData) => {
                if (error) {
                    return res.json({
                        is_error: true,
                        message: "Error Finding Forecast Data !",
                    });
                } else {
                    return res.json({
                        place: geoData.place,
                        latitude: geoData.latitude,
                        longitude: geoData.longitude,
                        temperature: forecastData.temperature,
                        weather: forecastData.weather,
                    });
                }
            }
        );
    } catch (e) {
        console.log("Error : ", e);
    }
};

module.exports = forecastController;
