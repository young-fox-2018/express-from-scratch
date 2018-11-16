const router = require('express').Router()


router.get('/', (req, res) => {
    res.render('teacher.ejs')
})


module.exports = router


