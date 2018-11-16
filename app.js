const express = require('express')
let app = express()
const homeRoute = require('./routes')
const studentRoute = require('./routes/student')
const teachersRoute = require('./routes/teachers')
let bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.set("view engine", "ejs")

app.use('/', homeRoute)
app.use('/student', studentRoute)
app.use('/teachers', teachersRoute)

app.listen(3000,function(){
    console.log("we're running on port 3000")
})