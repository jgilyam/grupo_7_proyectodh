const fs = require("fs");
const path = require("path");

const userFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

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
