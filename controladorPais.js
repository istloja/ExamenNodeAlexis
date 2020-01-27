const persona = require("./modeloPais");


//metodo para obtener todas las persona

exports.obtener = (req, res) => {
    persona.obtenertodaPersona((err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error: no se obtuvo los datos' });
        } else {
            res.send(data);
        }
    });
};

//metodo para eliminar personas
exports.eliminarPersona = (req, res) => {// lamar el metodo del modelo
    const eliminarPer = { // asignar una variable para obtener la clave primaria
        idpersona: req.body.idpersona
    }
    persona.eliminarPersona(eliminarPer,(err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error: no se elimino la persona' });
        } else {
            res.send(data);
        }
    });
};

//metodo para modificar personas
exports.modificarPersona = (req, res) => {// lamar el metodo del modelo
    const idpersona =  req.body.idpersona
    const editarPersona = new persona(req.body);// crear una nueva persona
    persona.modificarPersona(idpersona,editarPersona,(err,data)=> {
        if (err) {
            res.status(500).json({ mensaje: 'Error: no se elimino la persona' });
        } else {
            res.send(data);
        }
    });
};


//metodo para crear nueva persona
exports.crearPersona = (req, res) => {
    const crearPer = new persona({
        idpersona: req.body.idpersona,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido
    })
    persona.crearPersona(crearPer, (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error Al crear  ' });
        }
        res.send(data);
    })
}