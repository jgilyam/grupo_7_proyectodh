const db = require("../../../database/models");
const path = require("path");

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

        detail: `http://localhost:4000${req.originalUrl}/${producto.id_product}`,
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
  detail: (req, res) => {
    let categoria
    let types
    db.Category.findAll().then((category)=>{
      categoria= category
    });
    db.Typess.findAll().then((type)=>{
      types = type
    });
    db.Product.findByPk(req.params.id).then((productos) => {
      let categoriaProducto
      for (const a of categoria) {
        if(a.id_category == productos.id_category){
          categoriaProducto = a.name
        }
      };
      let typeProducto
      for (const b of types) {
        if(b.id_type == productos.id_type){
          typeProducto = b.name
        }
      };
        res.json({
        meta: { status: 200},
        data: {
          producto: {
            name: productos.name,
            price: productos.price,
            description: productos.description,
            stock:productos.stock,
            discount:productos.discount,
            relation:{Category:[{id :productos.id_category, name: categoriaProducto}],Type:[{id:productos.id_type, name:typeProducto}]},
            imagen: `http://localhost:4000/api/products/imagen/${productos.product_image}`
          },
        },
      });
      })
  },
  imageProduct: (req, res) => {
    const pathImage = path.join(
      __dirname,
      `../../../public/img/${req.params.imagen}`
    );
    res.sendFile(pathImage);
  }

};

module.exports = productsApiController;
