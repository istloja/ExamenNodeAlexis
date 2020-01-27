const connect = require('./conexionBd');

const pais = function (pais) {
    this.idPais = pais.idPais;
    this.nombre = pais.nombre,
        this.superficie = pais.superficie,
        this.idioma = pais.idioma,
        this.nroHabitantes=pais.nroHabitantes,
        this.moneda=pais.moneda;
};

pais.obtenertodoPais = result => {
    connect.query('Select * from pais', (err, res) => {
        if (err) {
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    });
};


// metodo para crear 
pais.crearPais = (crearPais, result) => {
    connect.query('Insert into pais set ?', crearPais, (err, res) => {
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

// metodo para eliminar pais
pais.eliminarPais=(eliminarPais, result)=> {
    connect.query('Delete from pais where ?', eliminarPais, (err, res) => {
        if (err) {
            console.log('*** Error', err);
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
            }
})
}





module.exports = pais;