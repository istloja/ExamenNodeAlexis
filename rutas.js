module.exports=app=>{
    const pais = require('./controladorPais');
    app.get('/rutaObtenerPais',pais.obtener);
    app.post('/rutaCrearPais',pais.crearPais);
    app.post('/rutaEliminarPais',pais.eliminarPais);
}

module.exports=app=>{
    const provinca = require('./controladorProvincia');
    app.get('/rutaObtenerProvincia',provinca.obtener);
    app.post('/rutaCrearProvincia',provincia);
    app.post('/rutaEditarProvincia',provincia.modificarProvincia);
}