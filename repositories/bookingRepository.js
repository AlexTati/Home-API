const db = require("../dal/database");

const insert = function(booking){
    return db.stmt("insert into BOOKING (DateDebut, DateFin, Insurance, Membre_id,House_id ) values(?,?,?, ? , ?)",
        [booking.DateDebut.slice(0, 19).replace('T', ' '), booking.DateFin.slice(0, 19).replace('T', ' '), booking.Insurance, booking.Membre_id, booking.House_id]);
}

const deleteBooking = function(id){
    return db.stmt("delete from BOOKING where id=?", [id]);
}

const getForMember = function (memberId){
    return db.stmt( 'select * from  BOOKING_SEARCH_VIEW where Accepter = 0 AND  owner =  ?', [memberId])
}

const acceptBooking = function (bookingId){
    return db.stmt( 'update BOOKING set Accepter = 1 WHere Id = ?',  [bookingId])
}


module.exports = {
    insert:insert,
    deleteBooking: deleteBooking,
    getForMember:getForMember,
    acceptBooking: acceptBooking
}
