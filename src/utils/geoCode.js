const request = require("postman-request");

const geoCode = (address, callback) => {
    const geoUrl =
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        encodeURIComponent(address) +
        ".json?access_token=pk.eyJ1IjoibmlzYXJnY2hva3NoaSIsImEiOiJja2w5czQ1N2YwOXB1MndueGU5aTJ3ZjNlIn0.ycal6Ux3hO75DYRa-M_nBw&limit=1";

    request({ url: geoUrl, json: true }, (error, response) => {
        if (error) {
            callback("Unable to Connect to Location Services ! ", undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to Map the Location !", undefined);
        } else {
            callback(undefined, {
                place: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
            });
        }
    });
};

module.exports = geoCode;
