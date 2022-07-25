module.exports = function (sequelize, DataTypes) {
  let alias = "Adress";
  // definicion del modelo
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
  //configuraciones adicionales
  let config = {
    tableName: "adress",
    timestamps: false,
  };

  const Adress = sequelize.define(alias, cols, config);

  //Relaciones entre las tablas
  Adress.associate = (modelos) => {
    Adress.belongsTo(modelos.User, {
      as: "usuarios",
      foreignKey: "id_user",
    });

    Adress.hasMany(modelos.Bill, {
      as: "facturas",
      foreignKey: "id_adress",
    });
  };

  return Adress;
};
