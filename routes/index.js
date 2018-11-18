const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.render('.',{ message: `Patria's School for Gifted` })
});

module.exports = routes;