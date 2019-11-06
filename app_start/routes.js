const userRoutes = require('../routes/userRoutes');
const memberRoutes = require('../routes/memberRoutes');
const houseRoutes = require('../routes/houseRoutes');
const countryRoutes = require('../routes/countryRoutes');
const authRoutes = require('../routes/authRoutes');
const testRoutes = require('../routes/testRoutes');

module.exports = function(app)
{
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    userRoutes(app);
    memberRoutes(app);
    houseRoutes(app);
    countryRoutes(app);
    authRoutes(app);
    testRoutes(app);

    app.use(function(req, res){
        res.send(404);
    });

}
