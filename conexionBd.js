const mysql = require('mysql');
const config = require('./configuracionBD');

const conection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.baseDatos
});

conection.connect(err => {
    if (err) {
        console.log(err)
        throw err;
    }
    console.log('++++Conectado a la Base de Datos')
});

/*
//probar una consuta directo
conection.connect();
conection.query("select * from persona",(err,res,camos)=>{

})
conection.end();
*/
module.exports = conection;