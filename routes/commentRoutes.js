const commentAction = require("../controllers/commentController");

module.exports = function (app, upload) {


    app.route("/houses/:id/comments")
        .post(upload.none(), commentAction.insert);

};

