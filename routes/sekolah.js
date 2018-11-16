const routes = require('express').Router()

routes.get('/home', (req, res) => {
    res.render('home.ejs')
})

module.exports = routes