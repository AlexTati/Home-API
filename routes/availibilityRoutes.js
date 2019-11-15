const availibilityAction = require("../controllers/availibilityController");

module.exports = function (app, upload) {
    app.route('/houses/:id/availibilities')
        .get(availibilityAction.getAvaibilitiesForHouse)
        .post(upload.none(), availibilityAction.insert)



    app.route('/availibilities')
        .post(upload.none(), availibilityAction.insert)

    app.route('/availibilities/:id')
        .delete(availibilityAction.deleteAvailibility)

}

