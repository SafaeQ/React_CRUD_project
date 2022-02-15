const users = require('../config/config')

function getUsers(req, res) {
    try {
        const user = users
        console.log('getALl', user);
        res.status(200).send(user)
    } catch (error) {
        throw error
    }
}

function addUser(req, res) {
    try {
        const {
            id,
            status,
            firstName,
            lastName,
            userName,
            registrationNumber
        } = req.body
        let result = users.push({
            id: id,
            status: status,
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            registrationNumber: registrationNumber
        })

        console.log('added', result);
        res.sendStatus(200)
        // for (item of user) {
        //     users.push(item)
        // }
    } catch (error) {
        throw error
    }
}

function remove(req, res) {
    try {
        let {
            id
        } = req.params.id
        const result = users.filter(id)

        console.log('deleted', result);
        res.sendStatus(200)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getUsers,
    addUser,
    remove
}