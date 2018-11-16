const router = require('express').Router()

router.get('/', function (req, res) {
    res.render('student.ejs')
})
router.post('/', function (req, res) {
    res.render('student.ejs')
})

module.exports = router