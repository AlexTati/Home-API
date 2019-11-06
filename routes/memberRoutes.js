const memberAction = require("../controllers/memberController");

module.exports = function(app)
{
    app.route("/members")
    .get(memberAction.getAllMembers)
    .post(memberAction.insertMember);

    app.route("/members/:id")
    .get(memberAction.getMemberById)
    .put(memberAction.updateMember)
    .delete(memberAction.deleteMember);
}

