const repo = require("../repositories/houseTypeRepository");
const type = require("../models/houseTypeModel");

const getAll = (req,res) => {

    repo.getAll().then(([rows, meta]) =>
    {
        types = [];
        rows.forEach(item => types.push(new type(item)));
        res.json(types);
    })
        .catch(err => res.status(400).send(err.message));
}

module.exports = {
    getAll: getAll
}
