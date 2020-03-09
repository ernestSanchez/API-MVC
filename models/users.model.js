
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

// Cargar archivo secrets
const absolutePath = path.join(__dirname.replace('models', ''), '/config/secrets.json')
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

var connection = mysql.createPool({
    host: secrets["mysql_host"],
    user: secrets["mysql_user"],
    password: secrets["mysql_password"],
    connectTimeout: 50000,
    acquireTimeout: 50000
});

//Extraer datos de 1 usuario
exports.getUserByID = (id, callback) => {
    connection.query(
        `SELECT * FROM ejemplodeploy.users WHERE ID = ${id};`,
        callback
    )
}

//Crear 1 nuevo usuario
exports.createNewUser = (
    username, 
    password, 
    firstName,
    secondName, 
    fechaInscripcion,
    email,
    callback
    ) => {
        connection.query(`
        INSERT INTO ejemplodeploy.users 
        (username, password, firstName, secondName, fechaInscripcion, email)
        VALUES 
        ("${username}", "${password}", "${firstName}", "${secondName}", ${fechaInscripcion}, "${email}");
        `, callback)
}

