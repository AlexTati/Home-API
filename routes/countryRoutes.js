const countryAction = require("../controllers/countryController");

module.exports = function(app, upload)
{
    app.route("/countries")
    .get(countryAction.getAllCountry);

    app.route("/countries/:id/cities")
    .get(countryAction.getCitiesForCountry)

}

