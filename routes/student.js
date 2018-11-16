let routes = require('express').Router()


routes.get("/", function(req, res){
    res.render("student.ejs")
})

routes.post("/", function(req, res){
    res.send(req.body)
})

module.exports = routes