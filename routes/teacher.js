const router = require('express').Router()


router.get('/', (req, res) => {
    res.render('teacher')
})

module.exports = router
