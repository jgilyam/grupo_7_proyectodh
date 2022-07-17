//base de datos sequelize
const db = require("../../../database/models");

const path = require("path");
const userController = {
  list: (req, res) => {
    db.User.findAll().then((users) => {
      let response = {
        status: 200,
        count: users.length,
        users: [],
      };

      users.forEach((user) => {
        response.users.push({
          id: user.id_user,
          name: user.firs_name,
          email: user.email,
          detail: `${req.originalUrl}/${user.id_user}`,
        });
      });

      return res.status(200).json([response]);
    });
  },
  detail: (req, res) => {
    db.User.findByPk(req.params.id).then((user) => {
      res.json({
        meta: { status: 200, url: `/api/user/${user.id_user}` },
        data: {
          user: {
            name: user.firs_name,
            apellido: user.last_name,
            date: user.date,
            email: user.email,
            imagen: `/api/user/imagen/${user.user_image}`,
          },
        },
      });
    });
  },
  imageUser: (req, res) => {
    const pathImage = path.join(
      __dirname,
      `../../../public/img/users/${req.params.image}`
    );
    res.sendFile(pathImage);
  },
};

module.exports = userController;
