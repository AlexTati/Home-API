const memberRepo = require("../repositories/memberRepository");
const member = require("../models/memberModel");
const bcrypt = require('bcrypt');

const login = (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    result = memberRepo.getByEmail(email).then(([rows, meta]) => {
        if (rows.length != 0) {
            let singleMember = new member(rows[0]);

            if (bcrypt.compareSync(password, singleMember.Password)) {
                singleMember.Password = '';
                res.json(singleMember);
            } else {
                res.status(400).send("invalid email / password");
            }
        } else {
            res.status(400).send("invalid email / password");
        }
    }).catch(err => res.status(400).send(err.message));

};

const old = (req, res) => {

    let email = req.body.email;

    memberRepo.getByEmail(email).then(([rows, meta]) => {

        if (rows.length == 1) {
            let singleMember = new member(rows[0]);
            res.json(singleMember);
        } else {
            let new_member = {Email: email}
            memberRepo.insertMinimalMember(new_member.Email)
                .then(([rows, meta]) => {
                    new_member.id = rows.insertId;
                    res.json(new_member);
                })
                .catch(err => res.status(400).send(err.message));
        }
    }).catch(err => res.status(400).send(err.message));

};

const loginOauth = (req, res) => {
    let email = req.body.email;
    let accountType = req.body.accountType;
    memberRepo.getByEmail(email).then(([rows, meta]) => {
        if (rows.length == 1) {
            let singleMember = new member(rows[0]);
            if (singleMember.Account_type == accountType){
                res.json(singleMember)  // login
            }else{
                res.status(400).send('email déjà utilisé')
            }
        }else{
            res.json(false) // register
        }
    }).catch(err => res.status(400).send(err.message));
};

module.exports = {
    login: login,
    loginOauth: loginOauth,
};
