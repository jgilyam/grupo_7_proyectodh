const db = require("../../../database/models");
const path = require("path");
const RAW_QUERY = `
SELECT t.name,t.id_type, 
COUNT(*) as cant FROM products p INNER JOIN typess t
 ON p.id_type = t.id_type GROUP BY t.name;`;

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
        countByCategory: [], //{}
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
      response.data.countByCategory.push({
        nameCategory: result.name,
        cantidad: result.cant,
        idType: result.id_type,
      });
      /* response.data.countByCategory[result.name] = result.cant; */
    });

    products.forEach((producto, i) => {
      response.data.productos.push({
        id: producto.id_product,
        name: producto.name,
        description: producto.description,
        bills: [],
        image: `http://localhost:4000/img/${producto.product_image}`,
        detail: `http://localhost:4000/api/products/${producto.id_product}`,
      });
      producto.bills.forEach((bill) => {
        response.data.productos[i].bills.push(bill);
      });
    });

    return res.status(200).json([response]);
  },
  detail: (req, res) => {
    db.Product.findByPk(req.params.id, { include: ["categoria", "tipo"] }).then(
      (productos) => {
        res.json({
          meta: { status: 200 },
          data: {
            producto: {
              name: productos.name,
              price: productos.price,
              description: productos.description,
              stock: productos.stock,
              discount: productos.discount,
              category:productos.categoria.name,
              type:productos.tipo.name,
              imagen: `http://localhost:4000/img/${productos.product_image}`,
              relation:{category : productos.categoria,
              type:productos.categoria}
            },
          },
        });
      }
    );
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
