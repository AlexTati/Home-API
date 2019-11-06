const memberRepo = require("../repositories/memberRepository");
const member = require("../models/memberModel");

const login = (req,res) => {
    let email = req.body.email;
    let password = req.body.password;

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
    login: login
}
