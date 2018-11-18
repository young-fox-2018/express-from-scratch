const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const ejs = require('ejs')

router.get('/', (req, res) => res.send('hallo WORLD'))

router.get('/student', (req, res) =>
    res.render('student.ejs'))

const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({
    extender: false
})

router.post('/student', urlEncodedParser, (req, res) =>
    res.render('student.ejs', req.body))

router.get('/teacher', (req, res) =>
    res.render('teacher.ejs'))

module.exports = router
