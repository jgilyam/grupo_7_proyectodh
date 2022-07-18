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

    let categoriaHelp = (expr) => {
      switch (expr) {
        case 1:
          return "pizzera";
          break;
        case 2:
          return "tabla";
          break;
        case 3:
          return "Posa vasos";
          break;
        case 4:
          return "Platos";
          break;
        case 5:
          return "cuencos";
          break;
        case 6:
          return "Bowls";
          break;
        case 7:
          return "Tabla corta";
          break;
        case 8:
          return "Tabla larga";
          break;
        case 9:
          return "asado";
          break;

        default:
          return `no hay categoria disponible ${expr}`;
          break;
      }
    };
    products.forEach((producto) => {
      response.productos.push({
        id: producto.id_product,
        name: producto.name,
        description: producto.description,
        categoria: categoriaHelp(producto.id_type),

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
