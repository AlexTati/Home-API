
const testPost = (req,res) => {
    res.json({email : req.body.email})
}

const savePicture= (req,res) => {
    res.json({path : "/assets/" + req.file.filename})
}

module.exports = {
    testPost: testPost,
    savePicture: savePicture
}
