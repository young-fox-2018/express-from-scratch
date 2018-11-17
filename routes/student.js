const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render('student.ejs');
});

routes.post('/data', (req, res) => {
    let student = req.body;    
    res.render('studentData.ejs', {student: student});
});

module.exports = routes;