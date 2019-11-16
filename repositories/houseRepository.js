const db = require("../dal/database");



const getAllHouses = function()
{
    return db.query("select * from HOUSE_FULL_VIEW");
}

const getHouseById = function(id)
{
    return db.stmt("select * from HOUSE where Id=?", [id]);
}

const getFullHouseById = function (id) {
    return db.stmt("CALL GetHouseDetails(?)", [id])
}

const deleteHouse = function(id){
    return db.stmt("delete from HOUSE where Id=?", [id]);
}

const insertHouse = function(house){
    console.log(house)
    return db.stmt("INSERT INTO `HOUSE` (`Title`, `Short_description`, `Long_description`, `Nb_guest`, `Picture`,   `Street`, `Num`, `Box`, City_id , Membre_id , `House_type_id`, `Lat`, `Lng`) " +
        "VALUES (?, ?, ?, ?,  ?, ?, ?, ?, ?, ?, ? , ?,  ?)",
        [house.Title, house.Short_description, house.Long_description, house.Nb_guest, house.Picture,  house.Street, house.Num, house.Box, house.City_id, house.Membre_id, house.House_type_id, house.Lat, house.Lng]);
}

const updateHouse = function(house)
{
     let q = "update HOUSE set " +
         "`Title` = ?, `Short_description` = ?, `Long_description` = ?, `Nb_guest` = ?, `Insurance_mandatory`  = ?, " +
         "`Street` = ?, `Num` = ?, `Box` = ?, City_id  = ?, `House_type_id`  = ?, `Lat`  = ?, `Lng`  = ? ";

     let params = [house.Title, house.Short_description, house.Long_description, house.Nb_guest, house.Insurance_mandatory,
         house.Street, house.Num, house.Box, house.City_id, house.House_type_id, house.Lat, house.Lng,];

    if (house.Picture){
        q += " ,Picture = ? ";
        params.push(house.Picture);
    }

    params.push( house.Id);
     q += " where Id = ?";

    console.log(q)

    return db.stmt( q , params );

}

const getHouseForMember = function (memberId){
    return db.stmt("select * from HOUSE_FULL_VIEW where Membre_id = ? and Active = 1", [memberId]);
}

const search = function (house){

    q = 'Select * from SEARCH_HOUSE_VIEW s WHERE 1' ;

    if (house.Country_id){
        q += (' AND Country_id = ' + house.Country_id);
    }

    if (house.House_type_id){
        q += (' AND House_type_id = ' + house.House_type_id);
    }

    if (house.Nb_guest){
        q += (' AND Nb_guest >= ' + house.Nb_guest);
    }

    if (house.availabilities.length){
        q += (' AND Start_date < \'' + house.availabilities[0].Start_date.slice(0, 19).replace('T', ' ') + '\'');
        q += (' AND End_date > \'' + house.availabilities[0].End_date.slice(0, 19).replace('T', ' ')+ '\'');
    }

    if (house.options !== undefined && house.options.length){
        house.options.forEach( item => q += ' AND EXISTS ( SELECT * from HOUSE_OPTIONS o where o.House_id = s.Id AND o.Option_id = ' + item.Id +  ' )')
    }

    q += ' group by Id';

    return db.query(q);
}

const disable = function (houseId){
    return db.stmt('update HOUSE set Active = 0, Deletion_time = CURRENT_DATE() where Id = ?', [houseId]);
}

module.exports = {
    getAllHouses: getAllHouses,
    getHouseById: getHouseById,
    deleteHouse: deleteHouse,
    insertHouse: insertHouse,
    updateHouse: updateHouse,
    getHouseForMember: getHouseForMember,
    getFullHouseById:  getFullHouseById,
    search:search,
    disable:disable
}
