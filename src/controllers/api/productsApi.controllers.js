const db = require("../../../database/models");

const productsApiController = {
  list: async (req, res) => {
    const category = await db.Category.findAll().then((category) => category);
    const typess = await db.Typess.findAll().then((typess) => typess);
    const products = await db.Product.findAll().then((product) => product);

    let response = {
      count: products.length,
      countByCategory: [],
      tipos: [],
      productos: [],
    };

    products.forEach((producto) => {
      response.productos.push({
        id: producto.id_product,
        name: producto.name,
        description: producto.description,
        detail: `${req.originalUrl}/${producto.id_product}`,
      });
    });
    typess.forEach((tipo) => {
      response.countByCategory.push({
        name: tipo.name,
      });
    });
    category.forEach((categoria) => {
      response.tipos.push({
        name: categoria.name,
      });
    });

    return res.status(200).json([response]);
  },
};

module.exports = productsApiController;
