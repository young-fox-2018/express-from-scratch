const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('student.ejs')
})
router.post('/', (req, res) => {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    console.log(data);

    res.render('data.ejs', { data })
})



module.exports = router
