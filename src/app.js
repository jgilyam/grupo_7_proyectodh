// modulos nativos requeridos

const path = require("path");

//modulos de terceros
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const { body } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");

//modulos propios
const routeMain = require("../src/routes/index.routes");
const routeProducts = require("../src/routes/products.routes");
const routeUsers = require("../src/routes/users.routes");
const userLogged = require("./middleware/userLogged");
const apiuser = require("./routes/api/users.router");

//instancia express
const app = express();

//Inicialización de variables
const PORT = 4000; //puerto en el que el servidor escuchara

//-----Configuración de express

// se decalra la carpeta public para servir archivos estaticos
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "secret1234", resave: false, saveUninitialized: true })
);
app.use(cookieParser());

app.use(userLogged); //tiene que ir despues de la session , xq si no no se ejecuta

//motor de plantillas ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(methodOverride("_method"));

// Manejadores de rutas
app.use("/", routeMain);
app.use("/producto", routeProducts);
app.use("/user", routeUsers);
app.use("/api/user", apiuser);

//Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
