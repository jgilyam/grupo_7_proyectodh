const db = require("../../../database/models");
const path = require("path");
const RAW_QUERY = `
SELECT t.name, COUNT(*) as cant
FROM products p
INNER JOIN typess t ON p.id_type = t.id_type
GROUP BY t.name;`;

const productsApiController = {
  list: async (req, res) => {
    const products = await db.Product.findAll({
      include: ["bills", "categoria", "tipo"],
    }).then((product) => product);

    const [results] = await db.sequelize.query(RAW_QUERY);

    let response = {
      count: products.length,
      countByCategory: {},
      productos: [],
    };
    results.forEach((result) => {
      response.countByCategory[result.name] = result.cant;
    });

    products.forEach((producto, i) => {
      response.productos.push({
        id: producto.id_product,
        name: producto.name,
        description: producto.description,
        bills: [],
        detail: `${req.originalUrl}${producto.id_product}`,
      });
      producto.bills.forEach((bill) => {
        response.productos[i].bills.push(bill);
      });
    });

    return res.status(200).json([response]);
  },
  detail: (req, res) => {
    let categoria;
    let types;
    db.Category.findAll().then((category) => {
      categoria = category;
    });
    db.Typess.findAll().then((type) => {
      types = type;
    });
    db.Product.findByPk(req.params.id).then((productos) => {
      let categoriaProducto;
      for (const a of categoria) {
        if (a.id_category == productos.id_category) {
          categoriaProducto = a.name;
        }
      }
      let typeProducto;
      for (const b of types) {
        if (b.id_type == productos.id_type) {
          typeProducto = b.name;
        }
      }
      res.json({
        meta: { status: 200 },
        data: {
          producto: {
            name: productos.name,
            price: productos.price,
            description: productos.description,
            stock: productos.stock,
            discount: productos.discount,
            relation: {
              Category: [
                { id: productos.id_category, name: categoriaProducto },
              ],
              Type: [{ id: productos.id_type, name: typeProducto }],
            },
            imagen: `http://localhost:4000/img/${productos.product_image}`,
          },
        },
      });
    });
  },
  imageProduct: (req, res) => {
    const pathImage = path.join(
      __dirname,
      `../../../public/img/${req.params.imagen}`
    );
    res.sendFile(pathImage);
  },
};

module.exports = productsApiController;
