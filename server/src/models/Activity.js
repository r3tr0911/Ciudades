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
      validate: {
        min: 1, 
        max: 5, 
      },
    },
    Duración: {
      type: DataTypes.FLOAT, 
      allowNull: false,
      validate: {
        min: 0, 
      },
    },
    Temporada: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
};