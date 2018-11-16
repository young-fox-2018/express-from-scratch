"use strict"

const app = require('express')()
const schoolRoutes  = require('./routes/student')
const homeRoute = require('./routes/')
const teacherRoute = require('./routes/teacher')
const  bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use('/student', schoolRoutes)
app.use('/', homeRoute)
app.use('/teachers', teacherRoute)

app.listen(4000, () => {
    console.log('App listening on port 4000')
})