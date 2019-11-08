const typesAction = require("../controllers/houseTypeController");

module.exports = function (app, upload) {
    app.route('/house-types')
        .get(typesAction.getAll)

}

