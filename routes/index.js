let routes = require('express').Router()

routes.get('/', function(req, res){
    res.send("Welcome to Programming Hell!!")
})

module.exports = routes