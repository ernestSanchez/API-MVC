const userController = require('./controller/user.controller')
const express = require('express');
const bodyParser = require('body-parser');

//Creo servidor
const server = express();

//Middleware
server.use(bodyParser.json());

//Endpoints
//GET /users --> todos los usuarios

server.get('/user/:id', userController.getOneUser);

server.post('/createUser', userController.createUser)

//PUT

//DELETE


//Listen
server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000")
})

