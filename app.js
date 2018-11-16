const express = require('express');
let app = express()
const sekolah = require('./routes/sekolah');
const student = require('./routes/student');
const teacher = require('./routes/teacher');

app.use('/', sekolah);
app.use('/', student);
app.use('/', teacher);
app.listen(3000, () => console.log("Listening on port" + 3000))