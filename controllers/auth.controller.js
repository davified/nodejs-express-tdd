const express = require('express')
const res = require('express/lib/response')
const AuthService = require('../services/auth.service')

const authController = (app) => {
    const router = express.Router()
    const authService = new AuthService()

    app.use('/auth', router)

    router.post('/register', (req, res) => {
        try {
            const { email, firstName, lastName, password } = req.body
            const user = authService.createUser(email, firstName, lastName, password)
            res.status(201).json(user)
        } catch (error) {
            res.status(400).json({
                error: error.message
            })
        }
    })

    router.post('/login', (req, res) => {
        res.status(200).send()
    })
}

module.exports = authController
