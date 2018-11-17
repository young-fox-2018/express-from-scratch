const express = require(`express`)
const ejs = require(`ejs`)
const bodyParser = require(`body-parser`)
let app = express()

app.set(`view engine`, `ejs`)
app.use(express.urlencoded({
    extended: false
}))
app.get(`/`, function(req, res) {
    res.render(`index.ejs`, {
        Message: `Ini website dengan EJS pertama saya!`
    })
})

app.listen(3000, () => {
    console.log(`Listening to port..`);
})

