
const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.send("Connected!")
})

module.exports = routes
