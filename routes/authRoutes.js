const memberAction = require("../controllers/memberController");

module.exports = function(app)
{
    app.route("/auth/login")
    .post(memberAction.login);
}

