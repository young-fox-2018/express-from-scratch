const routes = require('express').Router()

routes.get('/student', (req, res) => {
    res.render('studentForm.ejs')
})
routes.post('/student', (req, res) => {
    res.redirect('/home')
})
module.exports = routes