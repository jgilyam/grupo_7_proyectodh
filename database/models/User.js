module.exports = (sequelize, DataTypes) => {
  // definicion del modelo
  const cols = {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firs_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    user_image: {
      type: DataTypes.STRING(100),
    },
    box_info: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  };
  //configuraciones adicionales
  const config = {};

  const User = sequelize.define("User", cols, config);
  return User;
};