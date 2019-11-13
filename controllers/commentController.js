const repo = require("../repositories/commentRepository");
const comment = require("../models/commentModel");

const insert = (req, res) => {

    let newComment = new comment(req.body);
    if (newComment.isValid()) {
        repo.insert(newComment).then(([rows, meta]) => {
            newComment.id = newComment.insertId;
            res.json(newComment);
        }).catch(err => res.status(400).send(err.message))
    } else
        res.status(400).send('invalid data');
}


module.exports = {
    insert: insert
}
