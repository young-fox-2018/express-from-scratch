'use strict'

const express = require('express')
let app = express()
const routes = require('./routes')
const student = require('./routes/Studentroutes')
const teacher = require('./routes/Teachersroutes')

app.use('/',routes);
app.use('/student',student)
app.use('/teachers',teacher)

app.listen(3000, () => {
    console.log('App listening on port 3000')
})

