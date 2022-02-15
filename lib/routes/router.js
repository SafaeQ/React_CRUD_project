const router = require('express').Router()

const {
    getUsers
} = require('../Controller/crud.controller')

router.get('/', function (req, res) {
    res.send('heloo')
})
router.get('/users', getUsers)

module.exports = router