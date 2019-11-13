const db = require("../dal/database");
const bcrypt = require('bcrypt');


const getAllMembers = function()
{
    return db.query("select * from MEMBRE");
}

const getMemberById = function(id)
{
    return db.stmt("select * from MEMBRE where Id=?", [id]);
}



const deleteMember = function(id) {
    return db.stmt("delete from MEMBRE where Id=?", [id]);
}

const insertMember = function(member){
    let hash = bcrypt.hashSync(member.Password, 10 );
    return db.stmt("INSERT INTO `MEMBRE` (`Lastname`, `Firstname`, `Email`, `Phone`,  `Password`, `Home_street`, `Home_num`, `Home_box`, `Home_city_id`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [member.Lastname, member.Firstname, member.Email, member.Phone, hash, member.Home_street, member.Home_num, member.Home_box, member.Home_city_id]);
}

const insertMinimalMember = function (email){
    return db.stmt('INSERT INTO MEMBRE (Email, Account_type) VALUES (?, 1)', [email] )
}

const updateMember = function(member)
{
    return db.stmt("update MEMBRE set Lastname=?, Firstname=?, Email=?, Phone=?, Password=?, Home_street=?, Home_num=?, Home_box=?, Home_city_id=? where Id=?",
        [member.Lastname, member.Firstname, member.Email, member.Phone, member.Password, member.Home_street, member.Home_num, member.Home_box, member.Home_city_id]);
}

const getByEmail = function (email) {
    return db.stmt("select * from MEMBRE_FULL_VIEW where Email = ?", [email])
}

module.exports = {
    getAllMembers: getAllMembers,
    getMemberById: getMemberById,
    deleteMember: deleteMember,
    insertMember: insertMember,
    updateMember:updateMember,
    getByEmail: getByEmail,
    insertMinimalMember:insertMinimalMember
}
