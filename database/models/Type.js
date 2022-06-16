module.exports = function (sequelize, DataTypes) {
  let alias = "Typess";
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
    tableName: "typess",
    timestamps: false,
  };

  const Typess = sequelize.define(alias, cols, config);
  return Typess;
};
