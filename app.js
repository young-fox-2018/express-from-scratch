'use strict'

const express = require("express")
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.send('Home Page')
})

app.get('/student', function(req, res) {
    res.render('form.ejs')
})

app.post('/student', function(req, res) {
    let data = req.body
    res.render('student.ejs', {student:data})
})

app.get('/teachers', function(req, res) {
    res.send('Data Teacher')
})

app.listen(port, () => console.log(`server running on port 3000....`))