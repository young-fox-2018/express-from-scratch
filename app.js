const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teacher')
const bodyparser = require('body-parser')



app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({}))
// untuk menampilkan data di HTML
app.use('/', home)
app.use('/student', student)
app.use('/teacher', teacher)


app.listen(port, () => {
    console.log(`Application running on port:${port}`)
})