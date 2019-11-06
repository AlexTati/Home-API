const authAction = require("../controllers/authController");

module.exports = function (app) {
    app.route("/auth/login")
        .post(authAction.login);
}

