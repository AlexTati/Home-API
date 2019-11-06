const authAction = require("../controllers/authController");

module.exports = function (app, upload) {

    app.route("/auth/login")
        .post(authAction.login , upload.none);


}

