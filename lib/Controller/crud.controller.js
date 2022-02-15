const users = require('../config/config')

function getUsers(req, res) {
    try {
        const user = users
        res.status(200).send(user)
    } catch (error) {
        throw error
    }
}

function addUser(req, res) {
    try {
        const user = req.body
        for (item of user) {
            users.push(item)
        }
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUsers,
    addUser
}