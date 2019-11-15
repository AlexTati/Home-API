const userRoutes = require('../routes/userRoutes');
const memberRoutes = require('../routes/memberRoutes');
const houseRoutes = require('../routes/houseRoutes');
const countryRoutes = require('../routes/countryRoutes');
const authRoutes = require('../routes/authRoutes');
const testRoutes = require('../routes/testRoutes');
const houseTypesRoutes = require ('../routes/typesRoutes');
const optionRoutes = require ('../routes/optionRoutes.js');
const availibilityRoutes = require ('../routes/availibilityRoutes.js');
const commentRoute = require ('../routes/commentRoutes');
const bookingRoute = require ('../routes/bookingRoutes');


module.exports = function(app, upload)
{
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header ('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
        next();
    });


    userRoutes(app, upload);
    memberRoutes(app, upload);
    houseRoutes(app, upload);
    countryRoutes(app, upload);
    authRoutes(app, upload);
    houseTypesRoutes(app, upload);
    houseTypesRoutes(app, upload);
    houseTypesRoutes(app, upload);
    commentRoute(app, upload);
    bookingRoute(app, upload);
    optionRoutes(app, upload);
    availibilityRoutes(app, upload);


    testRoutes(app, upload);

    app.use(function(req, res){
        res.send(404);
    });

}
