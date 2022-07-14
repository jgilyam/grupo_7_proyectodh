//base de datos sequelize
const db = require("../../../database/models");

const userController = {
  /* list: (req, res) => {
   juampiiiiiiii
  }, */
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
