module.exports = function (sequelize, DataTypes) {
  let alias = "Category";
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
  let config = {
    tableName: "category",
    timestamps: false,
  };

  const Category = sequelize.define(alias, cols, config);
  return Category;
};
