const bookingAction = require("../controllers/bookingController");

module.exports = function (app, upload) {
    app.route('/houses/:id/booking')
        .post(upload.none(), bookingAction.insert)


    app.route('/members/:id/bookings')
        .get(bookingAction.getForMember)

    app.route('/bookings/:id/accept')
        .get(bookingAction.accept)


}

