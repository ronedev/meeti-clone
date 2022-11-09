const express = require('express');
const path = require('path')
require('dotenv').config({path: 'variables.env'})
const router = require('./routes')

const app = express();

//Habilitar EJS como template engine
app.set('view engine', 'ejs')

//Ubicacion vistas
app.set('views', path.join(__dirname, './views'))

//Routing
app.use('/', router())

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})