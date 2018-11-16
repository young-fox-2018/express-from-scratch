const express = require('express')
const router = express()



router.get('/', (req, res) => {
    res.render('home.ejs')
})



module.exports = router