const houseAction = require("../controllers/houseController");

module.exports = function(app, upload)
{
    app.route("/houses")
    .get(houseAction.getAllHouses)
    .post(houseAction.insertHouse);


    app.route("/houses/:id")
    .get(houseAction.getHouseById)
    .put(houseAction.updateHouse)
    .delete(houseAction.deleteHouse);

    app.route('/members/:id/houses')
        .get(houseAction.getHouseForMember)
}

