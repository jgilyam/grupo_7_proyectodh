module.exports = (sequelize, DataTypes) => {
  // definicion del modelo
  const cols = {
    id_prodcut: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    product_image: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };
  //configuraciones adicionales
  const config = {
    tableName: "products",
    timestamps: false,
  };

  const Product = sequelize.define("Product", cols, config);
  return Product;
};
