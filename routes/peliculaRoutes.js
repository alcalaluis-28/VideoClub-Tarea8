const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

// Crear película
router.post('/', peliculaController.crearPelicula);

// Listar todas las películas
router.get('/', peliculaController.obtenerPeliculas);

// Obtener película por ID
router.get('/:id', peliculaController.obtenerPeliculaPorId);

// Actualizar película
router.put('/:id', peliculaController.actualizarPelicula);

// Eliminar película
router.delete('/:id', peliculaController.eliminarPelicula);

// Exportar el router
module.exports = router;
