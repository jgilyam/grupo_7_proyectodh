module.exports = function (sequelize, DataTypes) {
  let alias = "Products_bill";
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
  let config = {
    tableName: "products_bill",
    timestamps: false,
  };

  const ProductsBill = sequelize.define(alias, cols, config);
  return ProductsBill;
};
