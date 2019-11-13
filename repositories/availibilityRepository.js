const db = require("../dal/database");

const getAvailibilitiesForHouse = function(houseId)
{
    return db.stmt("select * from AVAILIBILITY  where House_id = ?", [houseId]);
}

const insert = function(availibility){
    return db.stmt("insert into AVAILIBILITY (Start_date, End_date, House_id) values(?,?,?)",[availibility.Start_date.slice(0, 19).replace('T', ' '), availibility.End_date.slice(0, 19).replace('T', ' '), availibility.House_id]);
}

const deleteAvailibility = function(id){
    return db.stmt("delete from AVAILIBILITY where id=?", [id]);
}


module.exports = {
    getAvailibilitiesForHouse: getAvailibilitiesForHouse,
    insert:insert,
    deleteAvailibility: deleteAvailibility
}
