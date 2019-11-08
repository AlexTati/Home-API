const repo = require("../repositories/houseTypeRepository");
const type = require("../models/houseTypeModel");

const getAll = (req,res) => {

    repo.getAll().then(([rows, meta]) =>
    {
        types = [];
        rows.forEach(item => types.push(new type(item)));

        res.json(types);
    })
        .catch(err => res.json({"status": "error", "message": err.message}));


}

module.exports = {
    getAll: getAll
}
