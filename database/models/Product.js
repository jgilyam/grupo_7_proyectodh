module.exports = (sequelize, DataTypes) => {
  // definicion del modelo
  const cols = {
    id_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    product_image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
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

  //Relaciones entre las tablas
  Product.associate = (modelos) => {
    Product.belongsTo(modelos.Category, {
      as: "categorias",
      foreignKey: "id_category",
    });
  };

  Product.associate = (modelos) => {
    Product.belongsTo(modelos.Typess, {
      as: "tipo",
      foreignKey: "id_type",
    });
  };

  Product.associate = (modelos) => {
    Product.belongsTo(modelos.Products_bill, {
      as: "Products_bill",
      foreignKey: "id_product",
    });
  };

  return Product;
};
