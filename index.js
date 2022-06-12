const express = require("express");
require("dotenv").config();

// Crear el servidor de express
const app = express();

// Directorio publico
app.use(express.static("public"));

// Lectura y escritura de archivos (siempre antes de definir las rutas)
app.use(express.json());

// Importar rutas
app.use("/api/auth", require("./routes/auth"));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
