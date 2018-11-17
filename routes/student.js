const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.render('studentForm.ejs')
})

routes.post("/", function(req, res){
    res.send(req.body)
})

module.exports = routes