//modulos nativos
const path = require("path");
const fs = require("fs");

//modulos de terceros

//modulos propios
const productRecomen = require("../models/baseProducts");
const extractRandom = require("../utils/extractRandom");
const paginar = require("../utils/paginar");

//base de datos JSON
const productosJson = path.join(__dirname, "../data/products_DATA");

//base de datos sequelize
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Product = require("../../database/models/Product");

const productControllers = {};
productControllers.cart = (req, res) => {
  res.render("productCart");
};
//conotrolador que se encarga de mostrar el producto elegido por id en detalle
productControllers.detail = async (req, res) => {
  const productId = req.params.id;
  //const product = products.find((p) => p.id === Number(productId));
  const product = await db.Product.findOne(
    {
      where: {
        id_product: productId,
      },
    },
    {
      include: {
        association: "tipo",
      },
    }
  );
  /* console.log(product.Typess.name); */
  //const products = await db.Product.findAll();

  const productsInSale = await db.Product.findAll(
    {
      where: {
        id_category: 3,
      },
    },
    {
      limit: 4,
    }
  );

  const typeProduct = await db.Typess.findAll();

  //let productsInSale = extractRandom(productosJson, 4, "ofertas");
  res.render("productDetail", {
    product,
    productsInSale,
    typeProduct,
  });
};

/* productControllers.form = (req, res) => {
  res.render("productForm");
}; */

//index, productos separados en 3 secciones, nuevo, ofertas, masVendido
productControllers.index = async (req, res) => {
  //lectura de base de datos JSON
  //const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));
  const products = await db.Product.findAll();
  const users = await db.User.findAll();
  /* console.log(users); */
  res.render("products", { products });
};

productControllers.page = (req, res) => {
  const products = JSON.parse(fs.readFileSync(basePath, "utf-8"));
  let page = Number(req.params.page);
  let pages = [];
  for (let index = page; index < page + 10; index++) {
    pages.push(index);
  }

  let productsNew = paginar(products, 4, page, "nuevo");
  let productsInSale = paginar(products, 4, page, "ofertas");
  let productsTopSale = paginar(products, 4, page, "masVendido");
  res.render("products", {
    productsNew,
    productsInSale,
    productsTopSale,
    pages,
  });
};

//CREAR

productControllers.form = async (req, res) => {
  const category = await db.Category.findAll().then((category) => category); //sin el then tambien funciona;
  const typess = await db.Typess.findAll().then((typess) => typess);

  return res.render("productForm", { category, typess });
};

productControllers.store = async (req, res) => {
  let image = "";
  if (req.file) {
    image = req.file.filename;
  }

  db.Product.create({
    name: req.body.name,
    product_image: image,
    price: req.body.price,
    description: req.body.description,
    //seccion: req.body.types,
    id_category: req.body.category,
    id_type: req.body.types,
    stock: req.body.stock,
    discount: req.body.discount,
  })
    .then(() => {
      return res.redirect("/");
    })
    .catch((e) => {
      console.log(e);
      console.log("Changos!");
    });
};

// // CREAT
// productControllers.store = (req, res) => {
//   let id = products[products.length - 1].id + 1;
//   let image = "default-image.png";
//   if (req.file) {
//     image = req.file.filename;
//   }

//   let newProduct = {
//     id,
//     ...req.body,
//     image,
//   };
//   products.push(newProduct);
//   fs.writeFileSync(basePath, JSON.stringify(products));
//   res.redirect("producto");
// };

//EDIT
productControllers.edit = async (req, res) => {
  console.log("entre a edit");
  const productToEdit = await db.Product.findByPk(req.params.id);
  const category = await db.Category.findAll().then((category) => category); //sin el then tambien funciona;
  const typess = await db.Typess.findAll().then((typess) => typess);

  return res.render("product-edit-form", { category, typess, productToEdit });
};
productControllers.update = async (req, res) => {
  const productToEdit = await db.Product.findByPk(req.params.id);
  console.log("entre a update");
  let image = productToEdit.product_image;
  if (req.file) {
    image = req.file.filename;
    console.log(image);
  }
  await db.Product.update(
    {
      //id_prodct:,
      name: req.body.name,
      product_image: image,
      price: req.body.price,
      description: req.body.description,
      //seccion: req.body.types,
      id_category: req.body.category,
      id_type: req.body.types,
      stock: req.body.stock,
      discount: req.body.discount,
    },
    {
      where: {
        id_product: req.params.id,
      },
    }
  );
  res.redirect("/producto/" + req.params.id);
};

// GET-EDIT

// productControllers.edit = (req, res) => {
//   const productId = req.params.id;
//   const productToEdit = products.find((p) => p.id === Number(productId));

//   res.render("product-edit-form", { productToEdit });
// };

// productControllers.update = (req, res) => {
//   const productId = Number(req.params.id);
//   let productToEdit = products.find((p) => p.id === productId);

//   let image = productToEdit.image;
//   if (req.file) {
//     image = req.file.filename;
//   }
//   productToEdit = {
//     id: productId,
//     ...req.body,
//     image,
//   };
//   const updateProducts = products.map((p) => {
//     if (p.id === productToEdit.id) {
//       return (p = { ...productToEdit });
//     }
//     return p;
//   });
//   fs.writeFileSync(basePath, JSON.stringify(updateProducts), "utf-8");
//   res.redirect("/home");
// };
// ELIMINAR
productControllers.destroy = async (req, res) => {
  const idToDelete = req.params.id;
  //const finalProducts = products.filter((p) => p.id != idToDelete);

  //fs.writeFileSync(basePath, JSON.stringify(finalProducts), "utf-8");

  await db.Product.destroy({
    where: { id_product: idToDelete },
  });
  res.redirect("/");
};
module.exports = productControllers;
