let routes = require('express').Router()

routes.get("/", function(req, res){
    res.render("teachers.ejs")
})

module.exports = routes