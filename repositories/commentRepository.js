const db = require("../dal/database");



const getCommentForHouse = function (houseId){
    return db.stmt("select * from COMMENT where House_id = ? ", [houseId]);
}

module.exports = {
    getCommentForHouse: getCommentForHouse,
}
