// routes/route1.js

const express = require("express");
const router = express.Router();
var {middle1, middle2} = require ("./middleware");

router.get("/", middle1, (req,res)=>{
    res.send("Estás en la raíz");
})

router.get("/middleware2", middle2, (req,res)=>{
    res.send("Estás en Middleware 2");
})


module.exports = router;








//router.get('/route1', (req, res) => {
   // console.log(`[LOG] Fecha y hora: ${new Date()}`);
   // console.log('[LOG] Mensaje: Has accedido a la ruta /route1');
    //res.send('Estás en la ruta 1');
//});


