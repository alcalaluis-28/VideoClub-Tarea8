# 🎬 VideoClub-Backend (Node.js + Express + MySQL)
API REST para gestionar películas (CRUD) conectada a MySQL.

     🚀 1. Clonar el repositorio

Clona el repositorio usando el siguiente comando:

```bash
git clone https://github.com/alcalaluis-28/VideoClub-Tarea8.git
```
🔐 2) Configurar .env
```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_DATABASE=videoclub
DB_PORT=3306
```
🗄️ 3) Restaurar la base de datos (MySQL)
```
CREATE DATABASE videoclub;
-- Usar la base de datos
USE videoclub;

-- Crear tabla de películas si no existe
CREATE TABLE peliculas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(120) NOT NULL,
  director VARCHAR(100) NOT NULL,
  anio YEAR NOT NULL,
  stock INT NOT NULL
) ENGINE=INNODB;

-- Insertar registros de ejemplo
INSERT INTO peliculas (titulo, director, anio, stock) VALUES
('The Matrix','Lana & Lilly Wachowski',1999,7),
('Parasite','Bong Joon-ho',2019,5),
('Inception','Christopher Nolan',2010,9);

-- Consultar registros
SELECT * FROM peliculas;
```
🖥️ 4) Ejecutar el servidor:
Para iniciar el servidor con nodemon, primero instala nodemon globalmente (si no lo tienes):
```
npm install -g nodemon
```
Luego, ejecuta el servidor con el siguiente comando:
```
nodemon server.js
```
🧪 5. Verificar los verbos (GET/POST/PUT/DELETE) con Thunder Client
```
Para probar y verificar que los verbos HTTP (GET, POST, PUT, DELETE) estén funcionando correctamente, usa Thunder Client. Aquí te dejo cómo configurarlo:
```
📝 Pasos para probar la API en Thunder Client:
```
Instala Thunder Client en VSCode desde el marketplace de extensiones.

Abre Thunder Client en VSCode (Thunder Client en el menú lateral de VSCode).

Configura las rutas de la API para probar los verbos HTTP:

GET: Para listar todos las peliculas o buscar una pelicula por ID.

POST: Para crear un pelicula nuevo.

PUT: Para actualizar una pelicula existente.

DELETE: Para eliminar una pelicula por ID.
```
Ejemplo de una petición POST para crear un libro:
```
URL: http://localhost:3000/api/pelicula

Método:
Cuerpo (JSON):
```
📋 6. Documentación del Proyecto
```
Asegúrate de seguir las rutas y estructuras de datos establecidas en el proyecto:

Endpoint de creación de libro: /api/libro (Método POST)

Endpoint de listado de libros: /api/libro (Método GET)

Endpoint de actualización de libro: /api/libro/:id (Método PUT)

Endpoint de eliminación de libro: /api/libro/:id (Método DELETE)
```
📱 7. Probar la API
```
Asegúrate de tener la aplicación en funcionamiento accediendo a las rutas y verificando que los verbos HTTP (GET/POST/PUT/DELETE) estén operando correctamente usando Thunder Client.
```
👨‍🏫 Recursos y Herramientas
```
MySQL Workbench: Para manejar la base de datos de manera visual.

Thunder Client: Para probar los endpoints de la API.

VSCode: Para editar el código y ejecutar el servidor.
```




