const path = require("path");
const fs = require("fs");

//RUTA DE ARCHIVO JSON-USER
const userFilePath = path.join(__dirname, "../data/users.json");
//PASANDO ARCHIVO JSON-USER A ARRAY
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
//requiero user
const user = require("../models/user.js");

//base de datos sequelize
const db = require("../../database/models");

//requiero bcryptjs pra cuando el proceso de login lo necesite
let bcryptjs = require("bcryptjs");

//requiero express-validator
const { validationResult, body } = require("express-validator");
const { Console } = require("console");

//Tiempo de expiración de cookie
const TIEMPO_COKKIE = 60000;

const controllersUser = {};

/*controllersUser.login = (req, res) => {
  const mail = "juan@gmial.com"; // Variable que luego debe se reemplazada por el mail del usiario que se loogueo.

  //Maga, para indicar que el usuario se logueo usar esta variable en session "usuarioLogueado", si le pones otro nombre avisame para cambiar algo en el middleware ed la cookie

  //se setea la cookie
  if (req.body.recordar != undefined) {
    res.cookie("recordame", mail, { maxAge: TIEMPO_COKKIE });
  }
  res.redirect("/home");
};*/

controllersUser.formLogin = (req, res) => {
  res.render("login");
};

controllersUser.register = (req, res) => {
  res.render("register");
};

controllersUser.formconsultas = (req, res) => {
  res.render("formconsultas");
};

controllersUser.preguntasFrecuentes = (req, res) => {
  res.render("pregFrecuentes");
};
controllersUser.createUser = async (req, res) => {
  //proceso de registro de usuario
  let resultValidation = validationResult(req);
  if (resultValidation.errors.length > 0) {
    return res.render("register", {
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
  }

  let userEnBaseDeDato = await db.User.findOne({
    where: { email: req.body.email },
  }); //lo hago para buscar si ya existe ese email
  if (userEnBaseDeDato != null) {
    //si existe entra al if y tira el error
    return res.render("register", {
      errors: {
        email: {
          msg: "Este email ya está registrado",
        },
      },
      oldData: req.body,
    });
  }
  if (req.body.password != req.body.passwordRepit) {
    return res.render("register", {
      errors: {
        email: {
          msg: "Las contraseñas NO coinciden",
        },
      },
      oldData: req.body,
    });
  }
  let image = "userAvatar2.png";
  if (req.file) {
    image = req.file.filename;
  }
  let boxInfoo;
  if (req.body.boxInfo == null) {
    boxInfoo = "off";
  } else {
    boxInfoo = "on";
  }
  let passwordEncriptada= await bcryptjs.hash(req.body.password, 10)
 let crearUsuario ={firs_name: req.body.first_name,
 last_name: req.body.last_name,
 date: req.body.date,
 user_image: image,
 email: req.body.email,
 password: passwordEncriptada,
 box_info: boxInfoo}
 
  await db.User.create(crearUsuario);

  return res.redirect("login");
};
controllersUser.perfil = (req, res) => {
  res.render("perfil", {
    user: req.session.userLogged,
  });
};

controllersUser.proccessLogin = async(req, res) => {
  let userToLogin = await db.User.findOne({ where: { email: req.body.email } });
  console.log("pass usuario sin hash: "+req.body.password);
  console.log("pass usuario con hash guardada: "+userToLogin.password); 
  console.log("me trae el email?:"+ userToLogin.email)
  console.log("me trae el req.body.email: " + req.body.email)
  let isOkThePassword = await bcryptjs.compare(
    req.body.password,
    userToLogin.password)

    console.log("traeme true pofa: "+ isOkThePassword)

  if (userToLogin.email == req.body.email) {
    console.log("entra?:"+ userToLogin.email+ req.body.email )
    isOkThePassword 
    ;
    
    console.log("🚀 ~ file: user.controllers.js ~ line 127 ~ controllersUser.proccessLogin=async ~ isOkThePassword", isOkThePassword)
    
    if (isOkThePassword) {
      delete userToLogin.password;
      delete userToLogin.passwordRepit; // lo hago apra borrar la contra ya que en esta instancia no quiero que se vea
      req.session.userLogged = userToLogin; //genero una propiedad en session llamda userlogged(usuario logiado ) y le asigno el usertologin
      /* console.log("funciona sesion:", req.session.userLogged); */

      //Se setea la cookie para recordar el usuario.
      if (req.body.recordar) {
        res.cookie("mailUsuario", req.body.email, { maxAge: 1000 * 60 });
      }
      return res.redirect("/user/perfil");
    }
    return res.render("login", {
      errors: {
        password: {
          msg: "Los datos son invalidos",
        },
      },
    });
  }
  return res.render("login", {
    errors: {
      email: {
        msg: "No se encuentra este email registrado",
      },
    },
  });
};

controllersUser.logout = (req, res) => {
  res.clearCookie("mailUsuario"); //para borrar la cookie de la base y te desloguea automaticamente
  req.session.destroy(); //eso hace es borrar todo lo que este en session de
  return res.redirect("/");
};

controllersUser.edit = (req, res) => {
  db.User.findByPk(req.params.id).then(function (userToEdit) {
    return res.render("userEditForm", { userToEdit });
  });
};
controllersUser.update = async (req, res) => {
  let image = "default-image.png";
  if (req.file) {
    image = req.file.filename;
  }
  await db.User.update(
    {
      firs_name: req.body.firs_name,
      last_name: req.body.last_name,
      date: req.body.date,
      email: req.body.email,
      password: req.body.password,
      user_image: image,
      box_info: req.body.box_info,
    },
    {
      where: {
        id_user: req.params.id,
      },
    }
  );
  res.redirect("/perfil/" + req.params.id);
};
module.exports = controllersUser;

//realizado por Jose
/* let id = users[users.length - 1].id + 1;

let image = "default-image.png";

if (req.file) {
  image = req.file.filename;
}

let createUser = {
  id,
  ...req.body,
  image,
};

const usersData = fs.readFileSync(userFilePath, "utf-8");
let user;
if (usersData == "") {
  user = [];
} else {
  user = JSON.parse(usersData);
}
user.push(createUser);
usersJSON = JSON.stringify(user);
fs.writeFileSync(userFilePath, usersJSON); */
