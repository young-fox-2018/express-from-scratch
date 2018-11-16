const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const home = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teacher')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({}))

app.use('/', home)
app.use('/student', student)
app.use('/teacher', teacher)

app.listen(port, () => {
    console.log(`Listening on port 3000`);
})