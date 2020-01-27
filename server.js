const express = require('express');
const body_parser = require('body-parser');
const morgan= require("morgan");// modulo para saber que petciones se estan haciendo en consola

const app = express();
//configuraciones
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

//visualizar periciones en consola con modulo morgan
app.use(morgan("dev"));
console.log("dev");

//configuracion del servidor 
app.listen(2222,()=>{ //puerto del servidor
    console.log('Servidor Iniciado')
})
// configuracion para ejecutar las rutas
require("./rutas.js")(app);




