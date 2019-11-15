const repo = require("../repositories/bookingRepository");
const booking = require("../models/bookingModel");

const getBookingsForHouse = (req,res) => {

    houseId = req.params.id

    repo.getAvailibilitiesForHouse(houseId).then(([rows, meta]) =>
    {
        availibilities = [];
        rows.forEach(item => availibilities.push(new booking(item)));

        res.json(availibilities);
    })
        .catch(err => res.status(400).send(err.message));
}

const insert = (req,res) => {
    let new_booking = new booking(req.body);
    if(new_booking.isValid())
    {
        repo.insert(new_booking).then(([rows, meta])=>
        {
            new_booking.id = rows.insertId;
            res.json(new_booking);
        })
        .catch(err => res.status(400).send(err.message));
    } else
        res.status(400).send('Invalid data');
    }

const deleteBooking = (req,res) =>
{
    let id = req.params.id;

    if(isNaN(id))
    {
        res.status(400).send('Availibility Id Must Be Numeric');
    }else{
        repo.deleteAvailibility(id).then(([rows, meta]) =>
        {
            if(rows.affectedRows == 1 )
                res.json("Suppression effectuée avec succès!");
            else
                res.status(400).send('suppression failed');
        })
            .catch(err => res.status(400).send(err.message));
    }
}

const getForMember = (req, res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.status(400).send('Membre Id Id Must Be Numeric');
    }else {

        repo.getForMember(id).then(([rows, meta]) => {

            availibilities = [];
            rows.forEach(item => availibilities.push(new booking(item)));

            res.json(availibilities);
        })
            .catch(err => res.status(400).send(err.message));
    }

}

const accept = (req, res) => {

    let id = req.params.id;

    if(isNaN(id))
    {
        res.status(400).send('Booking Id Must Be Numeric');
    }else {
        repo.acceptBooking(id).then( ([rows, meta]) => {
            res.json('ok')
        })
    }


}


module.exports = {
    getBookingsForHouse: getBookingsForHouse,
    insert: insert,
    deleteBooking: deleteBooking,
    getForMember,getForMember,
    accept:accept
}
