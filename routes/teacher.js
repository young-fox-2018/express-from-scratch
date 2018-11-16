const router = require('express').Router()

router.get('/', function (req, res) {
    res.render('teacher.ejs')
})
router.post('/', function (req, res) {
    res.render('teacher.ejs')
})

module.exports = router