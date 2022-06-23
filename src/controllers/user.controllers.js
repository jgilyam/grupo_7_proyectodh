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
  let passwordEncriptada = await bcryptjs.hash(req.body.password, 10);
  let crearUsuario = {
    firs_name: req.body.first_name,
    last_name: req.body.last_name,
    date: req.body.date,
    user_image: image,
    email: req.body.email,
    password: passwordEncriptada,
    box_info: boxInfoo,
  };

  await db.User.create(crearUsuario);

  return res.redirect("login");
};
controllersUser.perfil = (req, res) => {
  res.render("perfil", {
    user: req.session.userLogged,
  });
};

controllersUser.proccessLogin = async (req, res) => {
  let userToLogin = await db.User.findOne({ where: { email: req.body.email } });

  if (userToLogin == null) {
    return res.render("login", {
      errors: {
        password: {
          msg: "Los datos son invalidos",
        },
      },
    });
  } else {
    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        //genero una propiedad en session llamda userlogged(usuario logiado ) y le asigno el usertologin
        req.session.userLogged = userToLogin;
        //Se setea la cookie para recordar el usuario.
        if (req.body.recordar) {
          res.cookie("mailUsuario", req.body.email, { maxAge: 1000 * 60 });
        }
        return res.redirect("/user/perfil/" + userToLogin.id_user);
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
  }
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
  const userToEdit = await db.User.findByPk(req.params.id);

  let image = userToEdit.user_image;
  if (req.file) {
    image = req.file.filename;
  }
  const userUpdated = {
    firs_name: req.body.firs_name,
    last_name: req.body.last_name,
    date: req.body.date,
    email: req.body.email,
    user_image: image,
  };
  await db.User.update(userUpdated, {
    where: {
      id_user: req.params.id,
    },
  });
  req.session.userLogged = userUpdated;
  res.redirect("/user/perfil/" + req.params.id);
};
module.exports = controllersUser;
