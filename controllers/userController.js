const userRepo = require("../repositories/userRepository");
const user = require("../models/userModel");

const getAllUsers = (req,res) => 
{
    userRepo.getAllUsers().then(([rows, meta]) => 
    {
        users = [];
        rows.forEach(item => users.push(new user(item)));

        res.json({"error":null, "users": users});
    })
    .catch(err => res.json({"error":null, "users": null}));

};

const getUserById = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.json({"error":"User Id Must Be Numeric", "user": null})
    }else{
        userRepo.getOneById(id).then(([rows, meta]) => {
             if(rows.length!=0)
             {
                 let singleUser = new user(rows[0]);
                 res.json({"error":null, "user": singleUser});
             }  else {
                res.json({"error":"specified user do not exists! ", "user": null});
             } 
        }).catch(error =>  res.json({"error":"Something went wrong!", "user": null}));
    }
   
}

const updateUser = (req,res) => {
    let id = req.params.id;
    if(isNaN(id))
    {
        res.json({"error":"User Id must be Numeric", "message":"Bastard Error!"});
    }
    else {
        req.body.id = id;

        let new_user = new user(req.body);
        if(new_user.isValid())
        {
            userRepo.updateUser(new_user).then(([rows, meta])=>
            {
               
                if(rows.affectedRows == 1 )
                    res.json({"error":null, "message":"user successfully updated!"});
                else{
                    res.json({"error":"Update Failure", "message":"Nothing has been updated!"});
                }
            }).catch(error => res.json({"error":"Insert Error", "message":"User not inserted"}))
        } else
            res.json({"error":"Validation Error", "message":"fields cannot be empty"});
    }
}
    
const insertUser = (req,res) => {
        let new_user = new user(req.body);
        if(new_user.isValid())
        {
            userRepo.insertUser(new_user).then(([rows, meta])=>
            {
                new_user.id = rows.insertId;
                res.json({"error":null, "message":"user successfully created!"});
            }).catch(error => res.json({"error":"Insert Error", "message":"User not inserted"}))
        } else
            res.json({"error":"Validation Error", "message":"fields cannot be empty"});
    
   
}

const deleteUser = (req,res) => 
{
    let id = req.params.id;

    if(isNaN(id))
    {
        res.json({"error":"User Id Must Be Numeric", "user": null})
    }else{
        userRepo.deleteUser(id).then(([rows, meta]) =>
        {
            if(rows.affectedRows == 1 )
                res.json({"error": null, "message": "Suppression effectuée avec succès!"});
            else
                res.json({"error": "Echec de la suppression", "message": "Aucune suppression effectuée!"});
        }).catch(error =>  res.json({"error": "Something went wrong!", "message": error}));
        
    }

}

module.exports = {
    //GET
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    //CUD
    updateUser: updateUser,
    insertUser: insertUser,
    deleteUser: deleteUser
}