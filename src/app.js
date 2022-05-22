// modulos nativos requeridos
const path = require("path");

//modulos de terceros
const express = require("express");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const { body } = require("express-validator");
const session = require("express-session");

//modulos propios
const routeMain = require("../src/routes/index.routes");
const routeProducts = require("../src/routes/products.routes");
const routeUsers = require("../src/routes/users.routes");

//instancia express
const app = express();

//Inicialización de variables
const PORT = 4000; //puerto en el que el servidor escuchara

//-----Configuración de express

// se decalra la carpeta public para servir archivos estaticos
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(session({ secret: "secret1234" }));

//motor de plantillas ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));

// Manejadores de rutas
app.use("/", routeMain);
app.use("/producto", routeProducts);
app.use("/user", routeUsers);

//Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
