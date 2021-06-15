require('dotenv').config()
require('./mongo')
const express = require('express');

const app = express();
const personajeRouter = require('./src/controllers/personaje');
const generoRouter = require('./src/controllers/personaje');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/personaje', personajeRouter);
app.use('/genero', generoRouter);


const PORT = 3000;
app.listen(PORT, () =>{
  console.log('server up')
})