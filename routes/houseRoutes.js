const houseAction = require("../controllers/houseController");

module.exports = function(app, upload)
{
    app.route("/houses")
    .get(houseAction.getAllHouses)
    .post(upload.single('picture'), houseAction.insertHouse);

    app.route('/houses/search')
        .post(upload.none(), houseAction.search)


    app.route("/houses/:id")
    .get(houseAction.getHouseById)
    .delete(houseAction.disable)
    .post(upload.single('picture'), houseAction.updateHouse)

    app.route('/members/:id/houses')
        .get(houseAction.getHouseForMember)

    app.route("/houses/:id/detailed")
        .get(houseAction.getHouseDetailsById)

}

