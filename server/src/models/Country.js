const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    ID:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true, 
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen_de_la_bandera: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Continente:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Subregión: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Área: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Población: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};