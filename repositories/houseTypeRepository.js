const db = require("../dal/database");

const getAll = function()
{
    return db.query("select * from HOUSE_TYPE order by Name");
}


module.exports = {
    getAll: getAll,
}
