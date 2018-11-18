"use strict"

const express = require("express");
const app = express();

const routes = require("./routes");
const student = require("./routes/student.js");
const teacher = require("./routes/teacher.js");

app.use("/", routes);
app.use("/student", student);
app.use("/teacher", teacher);

app.listen(3000, () => {
    console.log("Running on local host...")
})

