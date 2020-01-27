const pais = require("./modeloPais");


//metodo para obtener

exports.obtener = (req, res) => {
    persona.obtenertodosPais((err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error: no se obtuvo los datos' });
        } else {
            res.send(data);
        }
    });
};
//metodo para crear nueva
exports.crearPais = (req, res) => {
    const crearPais = new pais({
        idPais: req.body.idPais,
        nombre: req.body.nombre,
        superficie: req.body.superficie,
        idioma: req.body.idioma,
        nroHabitantes:req.body.nroHabitantes,
        moneda:req.body.moneda

    })
    pais.crearPais(crearPai, (err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error Al crear  ' });
        }
        res.send(data);
    })
}


exports.eliminarPais = (req, res) => {
    const eliminarPais = { 
        idPais: req.body.idPais
    }
    persona.eliminaPais(eliminarPais,(err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error: no se elimino' });
        } else {
            res.send(data);
        }
    });
};
