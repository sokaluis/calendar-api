const express = require("express");
require("dotenv").config();

// Crear el servidor de express
const app = express();

// Directorio publico
app.use(express.static("public"));

// Crear una ruta
// app.get("/", (req, res) => {
//   res.json({
//     ok: true,
//     mensaje: "Petición realizada correctamente",
//   });
// });

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
