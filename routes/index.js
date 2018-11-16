"use strict"

const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.status(200).json({message : ' I hate hacktiv8!'})
})

module.exports = routes