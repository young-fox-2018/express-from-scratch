"use strict"

const routes = require("express").Router();

routes.get("/", (req, res) => {
    res.render("teacher.ejs")
})

module.exports = routes