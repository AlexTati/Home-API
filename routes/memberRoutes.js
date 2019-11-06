const memberAction = require("../controllers/memberController");

module.exports = function(app, upload)
{
    app.route("/members")
    .get(memberAction.getAllMembers)
    .post(upload.none(), memberAction.insertMember);

    app.route("/members/:id")
    .get(memberAction.getMemberById)
    .put(upload.none(), memberAction.updateMember)
    .delete(upload.none(), memberAction.deleteMember);
}

