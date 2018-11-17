'use strict'

const app = require('express')();
const port = 3000;

const routes = require('./routes');
const student = require('./routes/student');
const teacher = require('./routes/teacher');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);
app.use('/student', student);
app.use('/teacher', teacher);

app.listen(port, () => {
    console.log(`Server running...`);
});