const users = require('../config/config')

function getUsers(req, res) {
    try {
        const user = users.find({})
        res.status(200).send(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUsers
}