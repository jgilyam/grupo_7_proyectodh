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

  Bill.associate = (modelos) => {
    Bill.hasMany(modelos.User, {
      as: "usuarios",
      foreignKey: id_user,
    });
  };

  Bill.associate = (modelos) => {
    Bill.hasMany(modelos.Adress, {
      as: "direcciones",
      foreignKey: id_adress,
    });
  };

  return Bill;
};
