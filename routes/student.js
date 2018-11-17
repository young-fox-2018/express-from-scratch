const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render('student.ejs');
});

routes.post('/', (req, res) => {
    res.send(req.body);
});

module.exports = routes;