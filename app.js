const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const router = require('./routes')
const port = 3000

app.use('/', router)
app.use('/student', router)
app.use('/teacher', router)

app.listen(port, () => console.log(`Check localhost ${port}!`))
