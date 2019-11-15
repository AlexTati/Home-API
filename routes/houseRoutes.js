const houseAction = require("../controllers/houseController");

module.exports = function(app, upload)
{
    app.route("/houses")
    .get(houseAction.getAllHouses)
    .post(upload.single('picture'), houseAction.insertHouse);


    app.route("/houses/:id")
    .get(houseAction.getHouseById)
    .put(houseAction.updateHouse)
    .delete(houseAction.disable)

    app.route('/members/:id/houses')
        .get(houseAction.getHouseForMember)

    app.route("/houses/:id/detailed")
        .get(houseAction.getHouseDetailsById)

    app.route('/houses/search')
        .post(upload.none(), houseAction.search)

}

