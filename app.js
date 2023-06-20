var createError = require('http-errors')
var express = require('express')
var path = require('path')
port = 3000

var indexRouter = require('./routes/index')

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

module.exports = app

app.listen(port, function () {
    console.log(`Running on port ${port}`)
})