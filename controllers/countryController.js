const countryRepo = require("../repositories/countryRepository");
const country = require("../models/countryModel");
const city = require("../models/cityModel");

const getAllCountry = (req,res) =>
{
    countryRepo.getAllCountry().then(([rows, meta]) =>
    {
        countries = [];
        rows.forEach(item => countries.push(new country(item)));

        res.json(countries);
    })
    .catch(err => res.json({"error":null, "users": null}));

};

const getCitiesForCountry = (req, res) => {

    let id = req.params.id;

    countryRepo.getCitiesForCountry(id).then(([rows, meta]) => {
        cities = []
        rows.forEach(item=> cities.push(new city(item)));
        res.json(cities);
    })
}


module.exports = {
    getAllCountry: getAllCountry,
    getCitiesForCountry: getCitiesForCountry
}
