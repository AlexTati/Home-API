const repo = require("../repositories/availibilityRepository");
const availibility = require("../models/availibilityModel");

const getAvaibilitiesForHouse = (req,res) => {

    houseId = req.params.id

    repo.getAvailibilitiesForHouse(houseId).then(([rows, meta]) =>
    {
        availibilities = [];
        rows.forEach(item => availibilities.push(new availibility(item)));

        res.json(availibilities);
    })
        .catch(err => res.status(400).send(err.message));
}

const insert = (req,res) => {
    let new_availibiity = new availibility(req.body);
    if(new_availibiity.isValid())
    {
        repo.insert(new_availibiity).then(([rows, meta])=>
        {
            new_availibiity.id = rows.insertId;
            res.json(new_availibiity);
        })
        .catch(err => res.status(400).send(err.message));
    } else
        res.status(400).send('Invalid data');
    }

const deleteAvailibility = (req,res) =>
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


module.exports = {
    getAvaibilitiesForHouse: getAvaibilitiesForHouse,
    insert: insert,
    deleteAvailibility: deleteAvailibility
}
