
// ruta para encontrar todas las persona
module.exports=app=>{
    const persona = require('./controladorPersona');
    app.post('/rutaObtenerPersona',persona.obtener);
    app.post('/rutaEliminarPersona',persona.eliminarPersona);
    app.post('/rutaModificarPersona',persona.modificarPersona);
    app.post('/rutaInsertarPersona',persona.crearPersona);
}

