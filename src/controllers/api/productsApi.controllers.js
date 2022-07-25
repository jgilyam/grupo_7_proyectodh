const db = require("../../../database/models");
const path = require("path");
const RAW_QUERY = `
SELECT t.name, COUNT(*) as cant
FROM products p
INNER JOIN typess t ON p.id_type = t.id_type
GROUP BY t.name;`;

const productsApiController = {
  list: async (req, res) => {
    let { page, size } = req.query;
    page = Number(page);
    size = Number(size);
    if (!page) {
      page = 0;
    }
    if (!size) {
      size = 5;
    }

    const products = await db.Product.findAll({
      offset: page * size,
      limit: size,
      include: ["bills", "categoria", "tipo"],
    });

    const [results] = await db.sequelize.query(RAW_QUERY);
    let total = await db.Product.count();
    let cantPaginas = Math.ceil(total / size);
    let next =
      page + 1 > cantPaginas
        ? "Fin"
        : `http://localhost:4000/api/products/?page=${page + 1}&size=5`;
    let previous =
      page - 1 < 0
        ? "Inicio"
        : `http://localhost:4000/api/products/?page=${page - 1}&size=5`;
    let response = {
      data: {
        count: total,
        countByCategory: {},
        productos: [],
      },
      paginado: {
        page: page,
        size: size,
        totalItems: total,
        cantPaginas,
        next,
        previous,
      },
    };
    results.forEach((result) => {
      response.data.countByCategory[result.name] = result.cant;
    });

    products.forEach((producto, i) => {
      response.data.productos.push({
        id: producto.id_product,
        name: producto.name,
        description: producto.description,
        bills: [],
        detail: `${req.originalUrl}${producto.id_product}`,
      });
      producto.bills.forEach((bill) => {
        response.data.productos[i].bills.push(bill);
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
