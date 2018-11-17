var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.render('./student.ejs')
});
router.post('/', function(req, res){
    res.send(req.body)
});

//export this router to use in our index.js
module.exports = router;