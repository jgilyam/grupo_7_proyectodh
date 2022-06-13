module.exports = function (sequelize, DataTypes) {
  let alias = "Bills";
  let cols = {
    id_bills: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
    id_direction: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.DECIMAL(2, 2),
    },
    date: {
      type: DataTypes.DATE,
    },
  };
  let config = {
    tableName: "Facturas",
    timestamps: false,
  };

  const Bills = sequelize.define(alias, cols, config);
  return Bills;
};
