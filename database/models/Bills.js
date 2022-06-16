module.exports = function (sequelize, DataTypes) {
  let alias = "Bill";
  let cols = {
    id_bills: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
    id_adress: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.DECIMAL(2, 2),
    },
    date: {
      type: DataTypes.STRING,
    },
  };
  let config = {
    tableName: "bill",
    timestamps: false,
  };

  const Bill = sequelize.define(alias, cols, config);
  return Bill;
};
