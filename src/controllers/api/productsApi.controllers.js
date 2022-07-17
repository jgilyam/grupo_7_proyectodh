const db = require("../../../database/models");

const productsApiController = {
  list: (req, res) => {
    db.Product.findAll().then((productos) => {
      let response = {
        status: 200,
        count: productos.length,
        countByCategory: [],
        productos: [],
      };

      productos.forEach((producto) => {
        response.productos.push({
          name: producto.name,

          description: producto.description,

          detail: `${req.originalUrl}/${producto.id_product}`,
        });
      });

      return res.status(200).json([response]);
    });
  },
};

module.exports = productsApiController;
