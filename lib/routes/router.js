const router = require('express').Router()

const {
    getUsers,
    addUser,
    remove
} = require('../Controller/crud.controller')

router.get('/', function (req, res) {
    res.send('heloo')
})
router.get('/users', getUsers)
router.post('/add-users', addUser)
router.delete('/delete-users/:id', remove)

module.exports = router