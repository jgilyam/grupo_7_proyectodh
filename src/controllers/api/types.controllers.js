const path = require("path");
//base de datos sequelize
const db = require("../../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

//---------------------------
//Dentro del actorsAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const typeController = {
  list: (req, res) => {
    db.Typess.findAll().then((type) => {
      let respuesta = {
        meta: {
          status: 200,
          total: type.length,
          url: "api/types",
        },
        data: type,
      };
      res.json(respuesta);
    });
  },

  detail: (req, res) => {
    db.Typess.findByPk(req.params.id).then((type) => {
      let respuesta = {
        meta: {
          status: 200,
          total: type.length,
          url: "/api/types/:id",
        },
        data: type,
      };
      res.json(respuesta);
    });
  },
  /* genreMovies: (req, res) => {
    db.Genre.findByPk(req.params.id, {
      include: ["movies"],
    }).then((genre) => {
      let respuesta = {
        meta: {
          status: 200,
          total: genre.length,
          url: "/api/genre/:id/movies",
        },
        data: genre,
      };
      res.json(respuesta);
    });
  }, */
};

module.exports = typeController;
