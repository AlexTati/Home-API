const repo = require("../repositories/optionRepository");
const option = require("../models/optionModel");

const getAll = (req,res) => {

    repo.getAllOptions().then(([rows, meta]) =>
    {
        options = [];
        rows.forEach(item => options.push(new option(item)));

        res.json(options);
    })
        .catch(err => res.json({"status": "error", "message": err.message}));
}


module.exports = {
    getAll: getAll
}
