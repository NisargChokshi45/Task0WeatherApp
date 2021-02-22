const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCodeValidator = require("./contollers/geoCode/geoCode.validator");
const geoCodeController = require("./contollers/geoCode/geoCode.controller");
const forecastController = require("./contollers/forecast/forecast.controller");

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather Portal",
        name: "Bacancy Technology",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Bacancy",
        name: "Bacancy Technology",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        helpText: "This is some helpful text.",
        title: "Help",
        name: "Bacancy Technology",
    });
});

// --------------------------------------------------------------------------------
// Challenge : Update the Weather Endpoint to accept Address
// Challenge : Complete the /weather route using geoCode.js & forecast.js
// --------------------------------------------------------------------------------

app.get("/weather", geoCodeValidator, geoCodeController, forecastController);

app.get("/products", (req, res, next) => {
    if (!req.query.search) {
        return res.json({
            message: "Please Provide a Search term",
            is_error: true,
        });
    } else {
        console.log(req.query);
        return res.json({ products: [] });
    }
});

app.get('/help/*', (req, res) => {
    res.render("404", {
        title: "404",
        name: "Bacancy Technology",
        errorMessage: "Help article not found.",
    });
})

app.get('*', (req, res) => {
    res.render("404", {
        title: "404",
        name: "Bacancy Technology",
        errorMessage: "Page not found.",
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})