const db = require("../dal/database");



const getCommentForHouse = function (houseId){
    return db.stmt("select * from COMMENT where House_id = ? ", [houseId]);
}

const insert = function (comment){
    return db.stmt( "insert into COMMENT(Note, Membre_id, House_id, Text ) values ( ? , ? , ? , ? )", [comment.Note, comment.Membre_id,comment.House_id,comment.Text ])
}

module.exports = {
    getCommentForHouse: getCommentForHouse,
    insert:insert
}
