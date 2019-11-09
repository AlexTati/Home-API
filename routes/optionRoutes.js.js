const optionAction = require("../controllers/optionController");

module.exports = function (app, upload) {
    app.route('/options')
        .get(optionAction.getAll)

}

