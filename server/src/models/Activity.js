const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    ID:{
      type: DataTypes.INTEGER,
      autoIncrement: true, 
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Dificultad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Duración: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Temporada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};