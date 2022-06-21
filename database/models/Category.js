module.exports = function (sequelize, DataTypes) {
  let alias = "Category";
  // definicion del modelo
  let cols = {
    id_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
  };
  //configuraciones adicionales
  let config = {
    tableName: "category",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);

  //Relaciones entre las tablas
  Category.associate = (modelos) => {
    Category.hasMany(modelos.Product, {
      as: "productos",
      foreignKey: "id_category",
    });
  };
  return Category;
};
