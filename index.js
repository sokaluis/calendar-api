const express = require("express");
const dbConnection = require("./database/config");
const cors = require("cors");
require("dotenv").config();

// Crear el servidor de express
const app = express();

// Database
dbConnection();

// Cors
app.use(cors());

// Directorio publico
app.use(express.static("public"));

// Lectura y escritura de archivos (siempre antes de definir las rutas)
app.use(express.json());

// Importar rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
