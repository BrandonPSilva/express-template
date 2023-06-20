var express = require('express')
var router = express.Router()
require('dotenv').config()
var path = require('path')
var resourcesPath = path.resolve('resources') + '/' // Path to the resources folder where files served will be stored.

var invalidKey = 'Invalid API Key'

// Home Page
router.get('/', function (req, res, next) {
    filename = 'public/index.html'
    res.sendFile(resourcesPath + filename)
})

// Download without key
router.get('/download', function (req, res) {
    res.send(invalidKey)
})

// Download
router.get('/download/:id', function (req, res) {
    if (req.params.id == process.env.API_KEY){
        var fileName = 'test.txt'
        res.download(resourcesPath + fileName)
    } else {
        res.send(invalidKey)
    }
})

module.exports = router