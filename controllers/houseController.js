const houseRepo = require("../repositories/houseRepository");
const optionRepo = require("../repositories/optionRepository");
const house = require("../models/houseModel");
const option = require("../models/optionModel");

const getAllHouses = (req,res) => {
    houseRepo.getAllHouses().then(([rows, meta]) => 
    {
        houses = [];
        rows.forEach(item => houses.push(new house(item)));

        res.json(houses);
    })
    .catch(err => res.status(400).send(err.message));

};

const getHouseById = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.status(400).send('House Id Must Be Numeric');
    }else{
        houseRepo.getHouseById(id).then(([rows, meta]) => {
            if(rows.length!=0)
            {
                let singleHouse = new house(rows[0]);
                res.json(singleHouse);
            }  else {
                res.status(400).send('house not found');
            }
        })
        .catch(err => res.status(400).send(err.message));
    }

}

const getHouseDetailsById = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.status(400).send("House Id Must Be Numeric");
    }else{
        houseRepo.getFullHouseById(id).then(([rows, meta]) => {
            if(rows.length!=0)
            {
                let singleHouse = new house(rows[0][0]);
                res.json(singleHouse);

            }  else {
                res.status(400).send('house not found');
            }
        }).catch(err => res.status(400).send(err.message));
    }

}

const updateHouse = (req,res) => {
    let id = req.params.id;
    if(isNaN(id))
    {
        res.json({"error":"House Id must be Numeric", "message":"Bastard Error!"});
    }
    else {
        req.body.id = id;

        let new_house = new house(req.body);
        if(new_house.isValid())
        {
            houseRepo.updateHouse(new_house).then(([rows, meta])=>
            {
                if(rows.affectedRows == 1 )
                    res.json({"error":null, "message":"house successfully updated!"});
                else{
                    res.json({"error":"Update Failure", "message":"Nothing has been updated!"});
                }
            }).catch(err => res.status(400).send(err.message));
        } else
            res.json({"error":"Validation Error", "message":"fields cannot be empty"});
    }
}
    
const insertHouse = (req,res) => {
        let new_house = new house(req.body);

        if(new_house.isValid())
        {
            if (req.file !== undefined){
                new_house.Picture = "http://sam.ovh/assets/" + req.file.filename;
            }
            houseRepo.insertHouse(new_house).then(([rows, meta])=>
            {
                new_house.id = rows.insertId;
                res.json(new_house);
            })
                .catch(err => res.status(400).send(err.message));
        } else
            res.status(400).send('invalid data');
    
}

const getHouseForMember = (req,res) => {
    let memberId = req.params.id;

    houseRepo.getHouseForMember(memberId).then(([rows, meta]) =>
    {
        houses = [];
        rows.forEach(item => houses.push(new house(item)));
        res.json(houses);
    })
        .catch(err => res.status(400).send(err.message));
}

const search = (req, res) => {
    qHouse  = new house(JSON.parse(req.body.query));

    houseRepo.search(qHouse).then(([rows, meta]) =>
    {
        houses = [];
        rows.forEach(item => houses.push(new house(item)));
        res.json(houses);
    });
}

module.exports = {
    //GET
    getAllHouses: getAllHouses,
    getHouseById: getHouseById,
    //CUD
    updateHouse: updateHouse,
    insertHouse: insertHouse,

    getHouseForMember: getHouseForMember,
    getHouseDetailsById: getHouseDetailsById,

    search:search,
}
