const geoCode = require("../../utils/geoCode");
const forecastController = require("../forecast/forecast.controller");

const geoCodeController = async (req, res, next) => {
    try {
        await geoCode(req.query.address, (error, geoData) => {
            if (error) {
                console.log(error);
                return res.json({
                    is_error: true,
                    message: "Error Finding Geo Location Data !",
                });
            } else {
                forecastController(req, res, geoData);
            }
        });
    } catch (e) {
        console.log("Error : ", e);
    }
};

module.exports = geoCodeController;
