const routes = require('express').Router()

const teachersData =  [
    {
    first_name: "Randy",
    last_name: "Ronda",
    subject: "Geography"
    },
    {
    first_name: "Felicia",
    last_name: "Mowdy",
    subject: "Math"
    },
    {
    first_name: "Felix",
    last_name: "Yanmen",
    subject: "Physics "
    }]

routes.get('/', (req,res) => {
    res.render("main.ejs")
})

routes.get('/student', (req,res) => {
    res.render("student.ejs")
})

routes.post('/student', (req,res) => {
    res.redirect("/")
    console.log(req.body)
})

routes.get('/teacher', (req, res) => {
    res.render('teacher.ejs', {
        teachers:teachersData
    })
})

module.exports = routes