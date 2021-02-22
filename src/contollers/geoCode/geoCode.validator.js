const geoCodeValidator = (req, res, next) => {
    if (!req.query.address) {
        return res.json({
            is_error: true,
            message: "Please Provide Adress in Query String !",
        });
    }
    next();
};

module.exports = geoCodeValidator;
