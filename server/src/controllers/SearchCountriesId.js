const express = require('express');
const axios = require('axios');
const { Country, Activity } = require('../db');

const searchCountriesId = express.Router();

searchCountriesId.get('/countries/:idPais', async (req, res) => {
  const { cca3 } = req.params;

  try {
    // Consultamos la base de datos local para obtener el país por su ID 
    const response = await axios.get(`http://localhost:5000/countries/${cca3}`);
    const { data } = response;

    const countryFromDb = await Country.findOne({
      where: { id: cca3 },
      include: Activity
    });

    if (countryFromDb) {
      return res.status(200).json(countryFromDb);
    } else {

      const { cca3, name, capital, population } = data;

      const countryDetail = {
        cca3,
        name,
        capital,
        population,
        // Agrega aquí más campos si es necesario
      };

      return res.status(200).json(countryDetail);
    }
  } catch (error) {
    console.error(error); // Registra el error en la consola para depuración
    res.status(500).json({ message: 'Error al obtener el país', error: error.message });
  }
});

module.exports = { searchCountriesId };
