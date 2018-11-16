"use strict"

const routes = require('express').Router()

routes.get('/', (req, res) => {
    let studentPage = `<html>
                        <h1> Welcome to Wtf School!</h1>
                        </html>`
    res.send(studentPage)
})

routes.get('/form', (req, res) => {
    res.render('View.ejs')
})

routes.post('/form', (req, res) => {
    res.send(req.body)
})


module.exports = routes