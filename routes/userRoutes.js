const userAction = require("../controllers/userController");

module.exports = function(app)
{
    app.route("/users")
    .get(userAction.getAllUsers)
    .post(userAction.insertUser);

    app.route("/users/:id")
    .get(userAction.getUserById)
    .put(userAction.updateUser)
    .delete(userAction.deleteUser);
}

