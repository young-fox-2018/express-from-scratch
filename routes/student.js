const routes = require('express').Router();
const bodyParser = require('body-parser');

routes.get('/', (req, res) => {
  res.render('student',{ message: `Student` })
});

routes.post('/', (req, res) => {
  let studentObj = {
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }
  console.log(studentObj);
});

module.exports = routes;