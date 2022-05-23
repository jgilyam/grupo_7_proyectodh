//este es un midelware de aplicacion, hay  que requerirlo en app.js
const user = require("../models/user");

function userLogged(req, res, next) {
  res.locals.isLogged = false; // con locals toda al app la conoce , voy a la vista y agrego un if con ejs

  let emailInCookie = req.cookies.mailUsuario;
  /*   console.log("emailInCOokie:", emailInCookie); */
  let userFromCookie = user.findByEmail(emailInCookie); //verifico que me traiga todo el usuario
  /*   console.log("user fromCookie", userFromCookie) */ if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }

  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    /*   console.log("hola soy locals.userlogged: ", res.locals.userLogged); */
  }

  next();
}

module.exports = userLogged;
