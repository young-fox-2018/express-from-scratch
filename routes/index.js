const routes = require('express').Router();



routes.get("/", (req,res) =>{
    res.render(".",{msg: "Selamat datang di sekolah milik Kevin"})
})

routes.get("/student", (req,res) =>{
    res.render("./studentForm")
})

routes.get("/teachers",(req,res) => {
    res.render("./teachers")
})

// routes.post()

module.exports = routes;