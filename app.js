"use strict"
const express = require("express");
const app = express();

const routes = require("./routes");
const student = require("./routes/student");
const teacher = require("./routes/teacher");

app.use("/", routes);
app.use("/routes/student", student);
app.use("/routes/teacher", teacher);

app.listen(3000, () => {
    console.log("Running on local host...")
})

