module.exports = function (sequelize, DataTypes) {
  let alias = "Adress";
  let cols = {
    id_direction: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    street: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
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
    tableName: "Direccion",
    timestamps: false,
  };

  const Direction = sequelize.define(alias, cols, config);
  return Direction;
};
