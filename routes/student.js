const router = require('express').Router()


router.get('/', (req, res) => {
    res.render('student.ejs')
})

router.post('/', (req, res) => {
    res.render('student.ejs')
})


module.exports = router