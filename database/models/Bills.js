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
    Bill.belongsToMany(modelos.Product, {
      as: "productos",
      through: "products_bill",
      foreignKey: "id_bill",
      otherKey: "id_product",
      timestamps: false,
    });

    Bill.belongsTo(modelos.Adress, {
      as: "direcciones",
      foreignKey: "id_adress",
    });

    Bill.belongsTo(modelos.User, {
      as: "usuarios",
      foreignKey: "id_user",
    });
  };

  return Bill;
};
