const routes = require('express').Router()

routes.get('/', (req, res) => {
    res.send('Welcome to school')
})

module.exports = routes