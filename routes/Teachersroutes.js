const routes = require('express').Router();

routes.get('/',(req,res)=>{
   res.render('Teachers.ejs')
});

module.exports = routes