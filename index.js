// index.js
const express = require("express"); //líneas necesarias para arrancar un servidor
require("dotenv").config(); 
const app=express(); 
const rutas = require("./route");

app.use('/',rutas);

const port=process.env.PORT || 3000 //o se recibe uno del Sistema Operativo o se utiliza el puerto 3000 
app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port); 
}); 