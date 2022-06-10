var express = require ('express')

var app = express();

const PUERTO = 80;  

app.listen(PUERTO, function() {
    console.log('Servidor http corriendo el puerto 80')
});

app.get('/', function(req,res){
    res.send('Hola mundo');
    console.log('Se recibio una peticion de tipo GET');
});
