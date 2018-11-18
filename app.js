const app = require('express')();
const port = 3000;
const routes = require('./routes/index')
const url_encoded = require('express').urlencoded()

app.set('view engine', 'ejs')
app.use(url_encoded)
app.use('/', routes)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})