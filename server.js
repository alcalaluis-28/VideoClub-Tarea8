// Cargar variables de entorno
require('dotenv').config()

// Mensaje de control al iniciar
console.log('Archivo server.js ejecutándose...')

// Importar dependencias principales
const express = require('express')

// Importar rutas de películas 
const peliculaRoutes = require('./routes/peliculaRoutes')

// Importar pool de conexión a la BD
const pool = require('./config/db')

// Inicializar la aplicación Express
const app = express()

// Definir el puerto del servidor (por .env o por defecto 3000)
const PORT = process.env.PORT || 3000

// Middleware para procesar datos en formato JSON
app.use(express.json())
console.log('✅ Server cargando...')

// Middleware para registrar acceso a /api/peliculas
app.use('/api/peliculas', (req, res, next) => {
  console.log('📡 Entrando a /api/peliculas')
  next()
})

// Rutas principales de la API
app.use('/api/peliculas', peliculaRoutes)

// Ruta de prueba para verificar que Express responde
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente')
})

// ✅ Verificar conexión a la base de datos al iniciar
pool.query('SELECT 1')
  .then(() => console.log('✅ Conexión a la base de datos correcta'))
  .catch(err => console.error('❌ Error de conexión a la BD:', err))

// Iniciar el servidor y escuchar en el puerto indicado
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`)
})
