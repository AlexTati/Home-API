const db = require("../dal/database");

const getAllUsers = function()
{
    return db.query("select * from users");
}

const getOneById = function(id)
{
    return db.stmt("select * from users where id=?", [id]);
}

const deleteUser = function(id){
    return db.stmt("delete from users where id=?", [id]);
}

const insertUser = function(user){
    return db.stmt("insert into users(username, password, email) values(?,?,?)",[user.username, user.password, user.email]);
}

const updateUser = function(user)
{
    return db.stmt("update users set username=?, password=?, email=? where id=?",[user.username, user.password, user.email, user.id]);

}

module.exports = {
    getAllUsers: getAllUsers,
    getOneById: getOneById,
    deleteUser: deleteUser,
    insertUser: insertUser,
    updateUser:updateUser,
}