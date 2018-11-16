const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const homePage = require('./routes')
const teacher = require('./routes/teacher')
const student = require('./routes/student')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', homePage)
app.use('/teacher', teacher)
app.use('/student', student)

app.listen(port, function () {
    console.log(`Listening on port: ${port}`)
})