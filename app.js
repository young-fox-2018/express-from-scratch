const express = require('express')
const app = express()
// const bodyparser = require('body-parser')
const port = 3000
const index  = require('./routes/index')
const studentForm = require('./routes/student')
const teacher = require('./routes/teacher')

// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended: true}))
// app.set("view engine", "ejs")
app.use('/', index)
app.use('/student', studentForm)
app.use('/teacher', teacher)

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
})