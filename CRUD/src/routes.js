const express = require('express')

const routes = express.Router()

const UserController = require('../src/controllers/UserController')

//READ
routes.get('/usuarios', UserController.index)

//CREATE
routes.post('/usuarios', UserController.create)

//UPDATE
routes.put('/usuarios/:id', UserController.update)

//DELETE
routes.delete('/usuarios/:id', UserController.delete)
module.exports = routes