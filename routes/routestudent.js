
const route = require('express').Router()

route.get('/', (req,res) => {
  res.render('student.ejs')
})

route.post('/', (req,res) => {
  let student = req.body
  res.render('formStudent.ejs', {student: student})
})
module.exports = route