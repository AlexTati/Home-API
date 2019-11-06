const testAction = require("../controllers/testController");

module.exports = function (app) {
    app.route("/test/picture")
        .post(testAction.savePicture);
}

