const houseRepo = require("../repositories/houseRepository");
const optionRepo = require("../repositories/optionRepository");
const house = require("../models/houseModel");
const option = require("../models/optionModel");

const getAllHouses = (req,res) => {
    houseRepo.getAllHouses().then(([rows, meta]) => 
    {
        houses = [];
        rows.forEach(item => houses.push(new house(item)));

        res.json({"status":"success", "data": houses});
    })
    .catch(err => res.json({"status":"error", "message": err.message}));

};

const getHouseById = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.json({"error":"House Id Must Be Numeric", "house": null})
    }else{
        houseRepo.getHouseById(id).then(([rows, meta]) => {
            if(rows.length!=0)
            {
                let singleHouse = new house(rows[0]);
                res.json({"status": "success", "data": singleHouse});

            }  else {
                res.json({"error":"specified house do not exists! ", "house": null});
            }
        }).catch(error =>  res.json({"error":error.stack, "house": null}));
    }

}

const getHouseDetailsById = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.json({"error":"House Id Must Be Numeric", "house": null})
    }else{
        houseRepo.getFullHouseById(id).then(([rows, meta]) => {
            if(rows.length!=0)
            {
                let singleHouse = new house(rows[0][0]);
                res.json({"status": "success", "data": singleHouse});

            }  else {
                res.json({"error":"specified house do not exists! ", "house": null});
            }
        }).catch(error =>  res.json({"error":error.stack, "house": null}));
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
            }).catch(error => res.json({"error":"Insert Error", "message":"House not inserted"}))
        } else
            res.json({"error":"Validation Error", "message":"fields cannot be empty"});
    }
}
    
const insertHouse = (req,res) => {
        let new_house = new house(req.body);

        if(new_house.isValid())
        {
            houseRepo.insertHouse(new_house).then(([rows, meta])=>
            {

                new_house.id = rows.insertId;
                res.json({"status":"success", "data": { "user" : new_house}});
            }).catch(error => res.json({"status":"error", "message":error.message}))
        } else
            res.json({"status":"fail", "message":"fields cannot be empty"});
    
}

const deleteHouse = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.json({"error":"House Id Must Be Numeric", "house": null})
    }else{
        houseRepo.deleteHouse(id).then(([rows, meta]) =>
        {
            if(rows.affectedRows == 1 )
                res.json({"error": null, "message": "Suppression effectuée avec succès!"});
            else
                res.json({"error": "Echec de la suppression", "message": "Aucune suppression effectuée!"});
        }).catch(error =>  res.json({"error": "Something went wrong!", "message": error}));
        
    }

}

const getHouseForMember = (req,res) => {
    let memberId = req.params.id;

    houseRepo.getHouseForMember(memberId).then(([rows, meta]) =>
    {
        houses = [];
        rows.forEach(item => houses.push(new house(item)));

        res.json({"status":"success", "data": houses});
    })
        .catch(err => res.json({"status":"error", "message": err.message}));


}

module.exports = {
    //GET
    getAllHouses: getAllHouses,
    getHouseById: getHouseById,
    //CUD
    updateHouse: updateHouse,
    insertHouse: insertHouse,
    deleteHouse: deleteHouse,

    getHouseForMember: getHouseForMember,
    getHouseDetailsById: getHouseDetailsById,
}
