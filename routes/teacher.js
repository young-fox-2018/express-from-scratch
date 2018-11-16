const routes = require('express').Router()

routes.get('/teacher', (req, res) => {
    res.render('teacher.ejs')
})

module.exports = routes