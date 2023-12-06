const express = require('express');
const app = express();
const puerto = 80;
const TemasController = require('./controllers/TemasController');
const UsuariosControllers = require('./controllers/UsuariosControllers');
const EnfermedadesControllers = require('./controllers/EnfermedadesControllers');
const MedicosControllers = require('./controllers/MedicosControllers');
const MedicamentosControllers = require('./controllers/MedicamentosControllers');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});

//app.get('/temas', TemasController.indexGet);
//app.get('/temas/:id([0-9]+)', TemasController.itemGet);

app.get('/usuarios', UsuariosControllers.indexGet);
app.post('/usuarios', UsuariosControllers.agregar);
app.put('/usuarios/:id([0-9]+)', UsuariosControllers.editar);
app.patch('/usuarios/:id([0-9]+)', UsuariosControllers.itemPatch);

app.get('/enfermedades', EnfermedadesControllers.indexGet);
app.post('/enfermedades', EnfermedadesControllers.agregar);
app.put('/enfermedades/:id([0-9]+)', EnfermedadesControllers.editar);
app.patch('/enfermedades/:id([0-9]+)', EnfermedadesControllers.itemPatch);


app.get('/medicos', MedicosControllers.indexGet);
app.post('/medicos', MedicosControllers.agregar);
app.put('/medicos/:id([0-9]+)', MedicosControllers.editar);
app.patch('/medicos/:id([0-9]+)', MedicosControllers.itemPatch);


app.get('/medicamentos', MedicamentosControllers.indexGet);
app.post('/medicamentos', MedicamentosControllers.agregar);
app.put('/medicamentos/:id([0-9]+)', MedicamentosControllers.editar);
app.patch('/medicamentos/:id([0-9]+)', MedicamentosControllers.itemPatch);



app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});