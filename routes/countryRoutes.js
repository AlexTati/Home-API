const countryAction = require("../controllers/countryController");

module.exports = function(app)
{
    app.route("/countries")
    .get(countryAction.getAllCountry);

    app.route("/countries/:id/cities")
    .get(countryAction.getCitiesForCountry)

}

