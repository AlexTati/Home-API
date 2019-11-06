const testAction = require("../controllers/testController");



module.exports = function (app, upload) {
    app.route('/test/mult')
        .post(upload.none(), testAction.testPost)

    app.route('/test/picture')
        .post(upload.single('picture'), testAction.savePicture)
}

