module.exports = function (sequelize, DataTypes) {
  let alias = "Product_bills";
  let cols = {
    id_product_bills: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_product: {
      type: DataTypes.INTEGER,
    },
    amount: {
      type: DataTypes.DECIMAL(5, 2),
    },
    unit_price: {
      type: DataTypes.DECIMAL(2, 2),
    },
  };
  let config = {
    tableName: "Productos_factura",
    timestamps: false,
  };

  const Product_bills = sequelize.define(alias, cols, config);
};
