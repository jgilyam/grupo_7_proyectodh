module.exports = function (sequelize, DataTypes) {
  let alias = "Products_bill";
  // definicion del modelo
  let cols = {
    id_product_bills: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_product: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price_unit: {
      type: DataTypes.DECIMAL(10, 2),
    },
  };
  //configuraciones adicionales
  let config = {
    tableName: "products_bill",
    timestamps: false,
  };

  const ProductsBill = sequelize.define(alias, cols, config);

   //Relaciones entre las tablas
   ProductsBill.associate = (modelos) => {
    ProductsBill.hasMany(modelos.Product,{
      as:"Product",
      foreignKey:"id_product"
    })
  }
  ProductsBill.associate = (modelos) => {
    ProductsBill.hasMany(modelos.Bill,{
      as:"Bill",
      foreignKey:"id_bill"
    })
  }

  return ProductsBill;

};
