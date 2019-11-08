const db = require("../dal/database");



const getAllHouses = function()
{
    return db.query("select * from HOUSE_FULL_VIEW");
}

const getHouseById = function(id)
{
    return db.stmt("select * from HOUSE where Id=?", [id]);
}

const deleteHouse = function(id){
    return db.stmt("delete from HOUSE where Id=?", [id]);
}

const insertHouse = function(house){
    return db.stmt("INSERT INTO `HOUSE` (`Lastname`, `Firstname`, `Email`, `Phone`, `Username`, `Password`, `Home_street`, `Home_num`, `Home_box`, `Home_city_id` , `House_type_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [house.Lastname, house.Firstname, house.Email, house.Phone, house.Username, house.Password, house.Home_street, house.Home_num, house.Home_box, house.Home_city_id, house.House_type_id]);
}

const updateHouse = function(house)
{
    return db.stmt("update HOUSE set Lastname=?, Firstname=?, Email=?, Phone=?, Username=?, Password=?, Home_street=?, Home_num=?, Home_box=?, Home_city_id=? where Id=?",
        [house.Lastname, house.Firstname, house.Email, house.Phone, house.Username, house.Password, house.Home_street, house.Home_num, house.Home_box, house.Home_city_id]);

}

const getHouseForMember = function (memberId){
    return db.stmt("select * from HOUSE_FULL_VIEW where Membre_id = ? ", [memberId]);
}

module.exports = {
    getAllHouses: getAllHouses,
    getHouseById: getHouseById,
    deleteHouse: deleteHouse,
    insertHouse: insertHouse,
    updateHouse: updateHouse,
    getHouseForMember: getHouseForMember,
}
