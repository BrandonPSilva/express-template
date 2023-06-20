var express = require('express')
var router = express.Router()
var resourcesPath = `${__dirname}/../resources/` // Path to the resources folder where files served will be stored.

// Home Page
router.get('/', function (req, res, next) {
    res.send('test')
})

// Download
router.get('/download', function (req, res) {
    var fileName = 'test.txt'
    res.download(resourcesPath + fileName)
})

module.exports = router