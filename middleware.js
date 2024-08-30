//Creación de Middlewares

var middle1=(req, res, next)=>{
    const fechaHoraActual = new Date();
    const fecha = fechaHoraActual.toLocaleDateString(); 
    console.log("Fecha: " + fecha);
    next(); 
}

var middle2=(req, res, next)=>{
    console.log("Este es el mensaje del Middleware 2");
    next(); 
}

module.exports={
    middle1, 
    middle2
}