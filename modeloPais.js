const connect = require('./conexionBd');

const pais = function (pais) {
    this.idPais = pais.idPais;
    this.nombre = pais.nombre,
        this.superficie = pais.superficie,
        this.idioma = pais.idioma,
        this.nroHabitantes=pais.nroHabitantes,
        this.moneda=pais.moneda;
};
//metodo para obtener todos los pais
persona.obtenertodaPais = result => {
    connect.query('Select * from pais', (err, res) => {
        if (err) {
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    });
};

// metodo para eliminar pais
persona.eliminarPais=(eliminarPais, result)=> {
    connect.query('Delete from pais where ?', eliminarPais, (err, res) => {
        if (err) {
            console.log('*** Error no se realizao la consulta', err);
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
            }
})
}

// metodo para modificar persona
persona.modificarPersona = (idpersona, editarPersona, result) => {
    connect.query('update persona set cedula=?,nombre=?,apellido=? where idpersona=? ',
        [editarPersona.cedula,editarPersona.nombre, editarPersona.apellido, idpersona], (err, res) => {
            if (err) {
                console.log('Error Al modificar los datos', err);
                result(null, err);
                return;
            }
            else if (res.affectedRows == 0) {
                result({kind:"No se encontros la persona"}, null);
            }   
            else{
                result(null, res);
            }
        })
}
module.exports = persona;

// metodo para crear nueva persona
persona.crearPersona = (crearPersona, result) => {
    connect.query('Insert into persona set ?', crearPersona, (err, res) => {
        if (err) {
            console.log('Error al insertar Los datos', err);
            result(null, err);
            return;
        }else{
        console.log(res);
        result(null, res);
        }
    });
}
