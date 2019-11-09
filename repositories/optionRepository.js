const db = require("../dal/database");



const getAllOptions = function()
{
    return db.query("select * from OPTIONS");
}



const getOptionForHouse = function (houseId){
    return db.stmt("select * from HOUSE_OPTIONS_VIEW where House_id = ? ", [houseId]);
}

module.exports = {
    getAllOptions: getAllOptions,
    getOptionForHouse: getOptionForHouse
}
