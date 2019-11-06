const db = require("../dal/database");



const getAllMembers = function()
{
    return db.query("select * from MEMBRE");
}

const getMemberById = function(id)
{
    return db.stmt("select * from MEMBRE where Id=?", [id]);
}

const deleteMember = function(id){
    return db.stmt("delete from MEMBRE where Id=?", [id]);
}

const insertMember = function(member){
    return db.stmt("INSERT INTO `MEMBRE` (`Lastname`, `Firstname`, `Email`, `Phone`,  `Password`, `Home_street`, `Home_num`, `Home_box`, `Home_city_id`) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [member.Lastname, member.Firstname, member.Email, member.Phone,member.Password, member.Home_street, member.Home_num, member.Home_box, member.Home_city_id]);
}

const updateMember = function(member)
{
    return db.stmt("update MEMBRE set Lastname=?, Firstname=?, Email=?, Phone=?, Password=?, Home_street=?, Home_num=?, Home_box=?, Home_city_id=? where Id=?",
        [member.Lastname, member.Firstname, member.Email, member.Phone, member.Password, member.Home_street, member.Home_num, member.Home_box, member.Home_city_id]);
}

const login = function (email, password)
{
    console.log("login attempt" + email + ":" + password)
    return db.stmt('SELECT * from MEMBRE where Email=? AND Password=?', [email, password])
}

module.exports = {
    getAllMembers: getAllMembers,
    getMemberById: getMemberById,
    deleteMember: deleteMember,
    insertMember: insertMember,
    updateMember:updateMember,
    login: login
}
