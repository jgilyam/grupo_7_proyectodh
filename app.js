// modulos requeridos
const express = require("express");
const app = express();
const path = require("path");

//Inicialización de variables
const PORT = 4000; //puerto en el que el servidor escuchara

app.use(express.static("public")); // se decalra la carpeta public para servir archivos estaticos

//Rutas
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

//Se levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
