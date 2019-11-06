const express = require('express');
var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/var/www/html/assets/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
});
var upload = multer({ storage: storage });


const app = express();

const registerRoutes = require('./app_start/routes');

registerRoutes(app, upload);

app.listen(3000);
