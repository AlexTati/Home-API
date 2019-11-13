const memberRepo = require("../repositories/memberRepository");
const member = require("../models/memberModel");

const getAllMembers = (req,res) => {
    memberRepo.getAllMembers().then(([rows, meta]) => 
    {
        members = [];
        rows.forEach(item => members.push(new member(item)));

        res.json(members);
    })
        .catch(err => res.status(400).send(err.message));

};

const getMemberById = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.status(400).send('Member Id Must Be Numeric');
    }else{
        memberRepo.getMemberById(id).then(([rows, meta]) => {
             if(rows.length!=0)
             {
                 let singleMember = new member(rows[0]);
                 res.json(singleMember);
             }  else {
                 res.status(400).send('Member not found');
             }
        }).catch(err => res.status(400).send(err.message));
    }
   
}

const updateMember = (req,res) => {
    let id = req.params.id;
    if(isNaN(id))
    {
        res.status(400).send('Member Id Must Be Numeric');
    }
    else {
        req.body.id = id;

        let new_member = new member(req.body);
        if(new_member.isValid())
        {
            memberRepo.updateMember(new_member).then(([rows, meta])=>
            {
                if(rows.affectedRows == 1 )
                    res.json(new_member);
                else{
                    res.status(400).send('update failed');
                }
            }).catch(err => res.status(400).send(err.message));
        } else
            res.status(400).send('invalid data');
    }
}
    
const insertMember = (req,res) => {
        let new_member = new member(req.body);

    console.log(new_member);

        if(new_member.isValid())
        {
            memberRepo.insertMember(new_member)
                .then(([rows, meta])=>
                    {
                        new_member.id = rows.insertId;
                        res.json(new_member);
                    })
                .catch(err => res.status(400).send(err.message));
        } else
            res.status(400).send('invalid data');


}

const deleteMember = (req,res) => {
    let id = req.params.id;

    if(isNaN(id))
    {
        res.status(400).send('Member Id Must Be Numeric');

    }else{
        memberRepo.deleteMember(id).then(([rows, meta]) =>
        {
            if(rows.affectedRows == 1 )
                res.json('success');
            else
                res.status(400).send('suppression failed');
        }).catch(err => res.status(400).send(err.message));
        
    }

}


module.exports = {
    //GET
    getAllMembers: getAllMembers,
    getMemberById: getMemberById,
    //CUD
    updateMember: updateMember,
    insertMember: insertMember,
    deleteMember: deleteMember,

}
