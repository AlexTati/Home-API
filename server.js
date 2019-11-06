const express = require('express');
const config = require("./config");
const app = express();

const registerRoutes = require('./app_start/routes');

config(app);
registerRoutes(app);

app.listen(3000);