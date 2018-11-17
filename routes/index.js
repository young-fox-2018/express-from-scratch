const route = require('express').Router()

route.get('/', (req,res) => {
  // res.status(200).json({message: 'Connected'})
  res.render('home.ejs')
})

module.exports = route