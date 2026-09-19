const express = require('express');
const cors = require('cors');
const bicicletas = require('./data');

const app = express();
const PORT = 3000; 

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('¡Hola Ricardo! El servidor de RodaBike está funcionando.');
});

// RUTA 1 (LEER)
app.get('/api/bicicletas', (req, res) => {
    res.json(bicicletas);
});

// RUTA 2 (CREAR)
app.post('/api/bicicletas', (req, res) => {
    const nuevaBici = req.body; 
    nuevaBici.id = bicicletas.length > 0 ? bicicletas[bicicletas.length - 1].id + 1 : 1;
    bicicletas.push(nuevaBici);
    res.status(201).json(nuevaBici);
});

// RUTA 3 (ELIMINAR)
app.delete('/api/bicicletas/:id', (req, res) => {
    const idParaBorrar = parseInt(req.params.id);
    const indice = bicicletas.findIndex(bici => bici.id === idParaBorrar);
    
    if (indice !== -1) {
        bicicletas.splice(indice, 1);
        res.status(200).json({ mensaje: 'Bicicleta eliminada correctamente' });
    } else {
        res.status(404).json({ mensaje: 'Bicicleta no encontrada' });
    }
});

// NUEVA RUTA 4 (ACTUALIZAR): Recibe el ID de la bici y los datos nuevos
app.put('/api/bicicletas/:id', (req, res) => {
    const idParaActualizar = parseInt(req.params.id);
    const datosNuevos = req.body; // Lo que Ricardo editó en el formulario
    
    // Buscamos dónde está la bicicleta vieja
    const indice = bicicletas.findIndex(bici => bici.id === idParaActualizar);
    
    if (indice !== -1) {
        // Reemplazamos los datos viejos con los nuevos, pero mantenemos su ID original
        bicicletas[indice] = { ...bicicletas[indice], ...datosNuevos, id: idParaActualizar };
        res.status(200).json(bicicletas[indice]);
    } else {
        res.status(404).json({ mensaje: 'Bicicleta no encontrada' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor de RodaBike encendido en http://localhost:${PORT}`);
});