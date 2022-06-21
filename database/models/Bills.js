module.exports = function (sequelize, DataTypes) {
  let alias = "Bill";
  // definicion del modelo
  let cols = {
    id_bill: {
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
      type: DataTypes.DECIMAL(10, 2),
    },
    date: {
      type: DataTypes.STRING,
    },
  };
  //configuraciones adicionales
  let config = {
    tableName: "bill",
    timestamps: false,
  };

  const Bill = sequelize.define(alias, cols, config);

  //Relaciones entre las tablas
  Bill.associate = (modelos) => {
    Bill.belongsTo(modelos.User, {
      as: "usuarios",
      foreignKey: "id_user",
    });
  };

  Bill.associate = (modelos) => {
    Bill.belongsTo(modelos.Adress, {
      as: "direcciones",
      foreignKey: "id_adress",
    });
  };

  Bill.associate = (modelos) => {
    Bill.belongsTo(modelos.Products_bill, {
      as: "Products_bill",
      foreignKey: "id_bill",
    });
  };

  return Bill;
};
