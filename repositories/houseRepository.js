const db = require("../dal/database");



const getAllHouses = function()
{
    return db.query("select * from HOUSE");
}

const getHouseById = function(id)
{
    return db.stmt("select * from HOUSE where Id=?", [id]);
}

const deleteHouse = function(id){
    return db.stmt("delete from HOUSE where Id=?", [id]);
}

const insertHouse = function(member){
    return db.stmt("INSERT INTO `HOUSE` (`Lastname`, `Firstname`, `Email`, `Phone`, `Username`, `Password`, `Home_street`, `Home_num`, `Home_box`, `Home_city_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [member.Lastname, member.Firstname, member.Email, member.Phone, member.Username, member.Password, member.Home_street, member.Home_num, member.Home_box, member.Home_city_id]);
}

const updateHouse = function(member)
{
    return db.stmt("update HOUSE set Lastname=?, Firstname=?, Email=?, Phone=?, Username=?, Password=?, Home_street=?, Home_num=?, Home_box=?, Home_city_id=? where Id=?",
        [member.Lastname, member.Firstname, member.Email, member.Phone, member.Username, member.Password, member.Home_street, member.Home_num, member.Home_box, member.Home_city_id]);

}

module.exports = {
    getAllHouses: getAllHouses,
    getHouseById: getHouseById,
    deleteHouse: deleteHouse,
    insertHouse: insertHouse,
    updateHouse:updateHouse,
}