const fs = require("fs");
const path = require("path");

const database = path.join(__dirname, "../data/users.json");

const bcryptjs = require("bcryptjs");

const user = {
  fileName: database,

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },

  findByPK: function (id) {
    //obtener a todos los usuario por id
    let allUsers = this.getData();
    let userFound = allUsers.find((oneUser) => oneUser.id === id);
    return userFound;
  },

  findByEmail: function (email) {
    //obtener a todos los usuario por email
    let allUsers = this.getData();
    let userFoundEmail = allUsers.find((oneUser) => oneUser.email === email);
    return userFoundEmail;
  },

  generarId: function () {
    //genero id buscando el ultimo y si no encuentrar traer id 1
    let allUsers = this.getData();
    let ultimoUser = allUsers.pop();
    if (ultimoUser) {
      return ultimoUser.id + 1;
    }
    return 1;
  },

  create: function (userData, image) {
    let allUsers = this.getData(); //me traigo todos los usuarios

    //guardo imagen por defecto
    let imageFinal = "default-image.png";

    if (image) {
      imageFinal = image.filename;
    }

    let newUser = {
      id: this.generarId(),
      ...userData,
      password: bcryptjs.hashSync(userData.password, 10),
      passwordRepit: bcryptjs.hashSync(userData.passwordRepit, 10),
      imageUsuario: imageFinal,
    };

    allUsers.push(newUser); // luego de esto vamos a escrbirlo en el archivo JSON
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, "")); //el write te pide ¿donde lo vas a escribir? en este caso en nuestro valor fileName mas arriba que tiene nuestro JSON//despues le pasamos en formato JSOn con stringify//si quiero mantener el formato edl JSON original pasar dos parametros mas null y un espacio;
    return newUser;
  },
};

module.exports = user;

/*const User = {
  fileName: "./data/users.json",

  getData: function () {
    return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
  },
  findAll: function () {
    return this.getData;
  },

  createUser: (req, res) => {
    let id = users[users.length - 1].id + 1;

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
    fs.writeFileSync(userFilePath, usersJSON);

    res.redirect("../home");
  },
};

module.exports = User;*/
