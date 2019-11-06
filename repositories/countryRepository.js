const db = require("../dal/database");

const getAllCountry = function()
{
    return db.query("select * from COUNTRY");
}

const getCitiesForCountry = function (countryId){
    return db.stmt("select * from CITY where Country_id = ?", [countryId])
}

module.exports = {
    getAllCountry: getAllCountry,
    getCitiesForCountry: getCitiesForCountry
}
