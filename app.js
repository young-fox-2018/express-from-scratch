// let ejs = require('ejs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('HOME SEKOLAH')
})

app.get('/student', (req, res) => {
    res.render('index.ejs')
})

app.post('/student', (req, res) => {
    // console.log("MASUK ", req.body)
    let student = req.body
    res.render('student.ejs', {student: student})
})

app.get('/teachers', (req, res) => {
    res.send('table teacher')
})

app.listen(port, () => {
    console.log('app running di port 3k')
})