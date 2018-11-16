"use strict"

const routes = require('express').Router()

routes.get('/', (req, res)=> {
    res.render('viewTeacher.ejs')
})

module.exports = routes