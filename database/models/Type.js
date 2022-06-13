module.exports = function (sequelize, DataTypes) {
  let alias = "Type";
  let cols = {
    id_type: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
  };
  let config = {
    tableName: "Tipos",
    timestamps: false,
  };

  const Type = sequelize.define(alias, cols, config);
  return Type;
};
