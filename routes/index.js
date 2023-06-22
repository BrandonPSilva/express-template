var express = require('express')
var router = express.Router()
require('dotenv').config()
var path = require('path')

var resourcesPath = path.resolve('resources') + '/' // Path to the resources folder
var functionsPath = path.resolve('functions') + '/' // Path to the functions folder
var requests = require(functionsPath + 'requests')

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
    if (req.params.id == process.env.API_KEY) {
        var fileName = 'test.txt'
        res.download(resourcesPath + fileName)
    } else {
        res.send(invalidKey)
    }
})

// GET test
router.get('/test', async function (req, res) {
    try {
        let result = await requests.getTest1()
        console.log('/test executed OK ' + Date())
        res.send(result)
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
})

// GET test
router.get('/test1', function (req, res) {
    res.json({
        "Users": [
            { "firstName": "John", "lastName": "Doe" },
            { "firstName": "Anna", "lastName": "Smith" },
            { "firstName": "Peter", "lastName": "Jones" }
        ]
    })
})

module.exports = router