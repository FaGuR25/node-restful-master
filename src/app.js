const express = require('express');
const cors = require('cors');

const app = express();
const puerto = 80;
const TemasController = require('./controllers/TemasController');
const GramosControllers = require('./controllers/GramosControllers');
const MarcaControllers = require('./controllers/MarcaControllers');
const MedicinaControllers = require('./controllers/MedicinaControllers');
const PrecioControllers = require('./controllers/PrecioControllers');
const GuardarControllers = require('./controllers/GuardarControllers');
const NotasControllers = require('./controllers/NotasControllers')

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});
//app.get('/temas', TemasController.indexGet);
//app.get('/temas/:id([0-9]+)', TemasController.itemGet);
app.get('/notas', NotasControllers.indexGet);
app.post('/notas', NotasControllers.agregar);

app.get('/gramos', GramosControllers.indexGet);
app.post('/gramos', GramosControllers.agregar);
app.put('/gramos/:id([0-9]+)', GramosControllers.editar);
app.patch('/gramos/:id([0-9]+)', GramosControllers.itemPatch);

app.get('/marca', MarcaControllers.indexGet);
app.post('/marca', MarcaControllers.agregar);
app.put('/marca/:id([0-9]+)', MarcaControllers.editar);
app.patch('/marca/:id([0-9]+)', MarcaControllers.itemPatch);


app.get('/medicina', MedicinaControllers.indexGet);
app.post('/medicina', MedicinaControllers.agregar);
app.put('/medicina/:id([0-9]+)', MedicinaControllers.editar);
app.patch('/medicina/:id([0-9]+)', MedicinaControllers.itemPatch);

app.get('/guardar', GuardarControllers.indexGet);
app.post('/guardar', GuardarControllers.agregar);
app.put('/guardar/:id([0-9]+)', GuardarControllers.editar);
app.patch('/guardar/:id([0-9]+)', GuardarControllers.itemPatch);


app.get('/precio', MedicinaControllers.precioGet);
app.post('/precio', PrecioControllers.agregar);
app.put('/precio/:id([0-9]+)', PrecioControllers.editar);
app.patch('/precio/:id([0-9]+)', PrecioControllers.itemPatch);



app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});