const express = require('express');
const multer  = require('multer');
const fs = require('fs');
const https = require('https');
const registerRoutes = require('./app_start/routes');

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/var/www/html/assets/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
});

const upload = multer({ storage: storage });

registerRoutes(app, upload);



https.createServer({
    key: fs.readFileSync('/etc/letsencrypt/live/sam.ovh/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/sam.ovh/cert.pem')
}, app).listen(3333);





