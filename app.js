'use strict'
const express = require('express')
let app = express()
const routes  = require('./routes')
const Studentroute = require('./routes/routestudent')
const Teacherroute = require('./routes/routeteacher')
const bodyParser = require('body-parser')

// app.get('/', function(req,res) {
//   res.send("i hate hacktvv8!")
// })
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/',routes)
app.use('/student' , Studentroute)
app.use('/teacher' , Teacherroute)

app.listen(3000, () => {
  console.log('App listenign to port 3000')
})