module.exports = function (sequelize, DataTypes) {
  let alias = "Adress";
  let cols = {
    id_adress: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    locality: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "adress",
    timestamps: false,
  };

  const Adress = sequelize.define(alias, cols, config);
  return Adress;
};
