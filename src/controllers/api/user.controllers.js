//base de datos sequelize
const db = require("../../../database/models");

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
        meta: { status: 200, url: "/api/user" },
        data: { user: user },
      });
    });
  },
};

module.exports = userController;
