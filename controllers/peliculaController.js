// Acceso a la BD
const pool = require('../config/db')

// Crear
exports.crearPelicula = async (req, res) => {
  const { titulo, director, anio, stock } = req.body

  if (!titulo || !director || anio == undefined || stock == undefined) {
    return res.status(400).json({ mensaje: 'Faltan completar los campos' })
  }

  const sql = "INSERT INTO peliculas (titulo, director, anio, stock) VALUES (?,?,?,?)"

  try {
    const [result] = await pool.query(sql, [titulo, director, anio, stock])
    res.status(201).json({
      id: result.insertId,
      mensaje: 'Pelicula registrada correctamente'
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

// Listar
exports.obtenerPeliculas = async (req, res) => {
  const sql = "SELECT id, titulo, director, anio, stock FROM peliculas"
  try {
    const [peliculas] = await pool.query(sql)
    res.status(200).json(peliculas)
  } catch (e) {
    console.error(e)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

// Buscar por ID
exports.obtenerPeliculaPorId = async (req, res) => {
  const { id } = req.params
  const sql = "SELECT id, titulo, director, anio, stock FROM peliculas WHERE id = ?"

  try {
    const [peliculas] = await pool.query(sql, [id])

    if (peliculas.length === 0) {
      return res.status(404).json({ mensaje: 'No encontramos la película con ese ID' })
    }

    res.status(200).json(peliculas[0])
  } catch (e) {
    console.error(e)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

// Actualizar
exports.actualizarPelicula = async (req, res) => {
  const { id } = req.params
  const { titulo, director, anio, stock } = req.body

  if (!titulo && !director && anio == undefined && stock == undefined) {
    return res.status(400).json({ mensaje: 'Faltan completar los campos' })
  }

  let sqlParts = []
  let values = []

  if (titulo) {
    sqlParts.push('titulo = ?')
    values.push(titulo)
  }
  if (director) {
    sqlParts.push('director = ?')
    values.push(director)
  }
  if (anio != undefined) {
    sqlParts.push('anio = ?')
    values.push(anio)
  }
  if (stock != undefined) {
    sqlParts.push('stock = ?')
    values.push(stock)
  }

  const sql = `UPDATE peliculas SET ${sqlParts.join(', ')} WHERE id = ?`
  values.push(id)

  try {
    const [result] = await pool.query(sql, values)

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: 'No encontramos la película con el ID' })
    }

    res.status(200).json({ mensaje: 'Película actualizada correctamente' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

// Eliminar
exports.eliminarPelicula = async (req, res) => {
  const { id } = req.params
  const sql = "DELETE FROM peliculas WHERE id = ?"

  try {
    const [result] = await pool.query(sql, [id])

    if (result.affectedRows === 0) {
      return res.status(400).json({ mensaje: 'No encontramos la película a eliminar' })
    }

    res.status(200).json({ mensaje: 'Película eliminada correctamente' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}
