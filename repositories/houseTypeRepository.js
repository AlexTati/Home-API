const db = require("../dal/database");

const getAll = function()
{
    return db.query("select * from HOUSE_TYPE");
}


module.exports = {
    getAll: getAll,
}
