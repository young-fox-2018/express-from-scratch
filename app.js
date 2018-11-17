"use strict"

const express = require("express")
let app = express();
const routes = require("./routes")


app.set('view engine', 'ejs');

const port = 3000


app.use("/", routes);


app.listen(port, () =>{
    console.log(`Hey, our website is running`)
})