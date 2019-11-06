const memberRepo = require("../repositories/memberRepository");
const member = require("../models/memberModel");

const getAllMembers = (req,res) => 
{
    memberRepo.getAllMembers().then(([rows, meta]) => 
    {
        members = [];
        rows.forEach(item => members.push(new member(item)));

        res.json({"status":"success", "members": members});
    })
    .catch(err => res.json({"status":"error", "message": err.message}));

};

const getMemberById = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.json({"error":"Member Id Must Be Numeric", "member": null})
    }else{
        memberRepo.getMemberById(id).then(([rows, meta]) => {
             if(rows.length!=0)
             {
                 let singleMember = new member(rows[0]);
                 res.json({"error":null, "member": singleMember});
             }  else {
                res.json({"error":"specified member do not exists! ", "member": null});
             } 
        }).catch(error =>  res.json({"error":"Something went wrong!", "member": null}));
    }
   
}

const updateMember = (req,res) => {
    let id = req.params.id;
    if(isNaN(id))
    {
        res.json({"error":"Member Id must be Numeric", "message":"Bastard Error!"});
    }
    else {
        req.body.id = id;

        let new_member = new member(req.body);
        if(new_member.isValid())
        {
            memberRepo.updateMember(new_member).then(([rows, meta])=>
            {
                if(rows.affectedRows == 1 )
                    res.json({"error":null, "message":"member successfully updated!"});
                else{
                    res.json({"error":"Update Failure", "message":"Nothing has been updated!"});
                }
            }).catch(error => res.json({"error":"Insert Error", "message":"Member not inserted"}))
        } else
            res.json({"error":"Validation Error", "message":"fields cannot be empty"});
    }
}
    
const insertMember = (req,res) => {
        let new_member = new member(req.body);

        if(new_member.isValid())
        {
            memberRepo.insertMember(new_member).then(([rows, meta])=>
            {

                new_member.id = rows.insertId;
                res.json({"status":"success", "data": { "user" : new_member}});
            }).catch(error => res.json({"status":"error", "message":error.message}))
        } else
            res.json({"status":"fail", "message":"fields cannot be empty"});
    
}

const deleteMember = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.json({"error":"Member Id Must Be Numeric", "member": null})
    }else{
        memberRepo.deleteMember(id).then(([rows, meta]) =>
        {
            if(rows.affectedRows == 1 )
                res.json({"error": null, "message": "Suppression effectuée avec succès!"});
            else
                res.json({"error": "Echec de la suppression", "message": "Aucune suppression effectuée!"});
        }).catch(error =>  res.json({"error": "Something went wrong!", "message": error}));
        
    }

}

const login = (req,res) => {
    let email = req.body.email;
    let password = req.body.password;

    console.log(email)
    console.log(password)

    result = memberRepo.login(email, password).then(([rows, meta]) => {
        if(rows.length!=0){
            let singleMember = new member(rows[0]);
            res.json({"status": "success", "data" : { "member": singleMember}});
        }else{
            res.json({"status": "fail", "message" : "invalid email / password"});
        }
    }).catch(err => res.json({"status":"error", "message": err.message}))


}

module.exports = {
    //GET
    getAllMembers: getAllMembers,
    getMemberById: getMemberById,
    //CUD
    updateMember: updateMember,
    insertMember: insertMember,
    deleteMember: deleteMember,

    login: login
}
