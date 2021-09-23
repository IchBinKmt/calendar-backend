const express = require('express');
const { dbConnection } = require('./db/config');
require('dotenv').config();

console.log(process.env);
// Crear el servidor de express

const app = express();

// Base de datos
dbConnection();

// Directorio publico
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${process.env.PORT}`);
});
