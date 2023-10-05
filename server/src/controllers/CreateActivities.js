const express = require('express');
const searchCountriesId = express.Router();
const axios = require('axios');
const { Country, Activity } = require('../db');

searchCountriesId.get('/countries/:idPais', async (req, res) => {
  const { idPais } = req.params;

  try {
    // Busca el país por su ID en la base de datos local, incluyendo las actividades turísticas asociadas
    const country = await Country.findOne({
      where: { cca3: idPais },
      include: Activity,
    });

    if (country) {
      res.json(country);
    } else {
      // Si el país no está en la base de datos local, realiza una solicitud a la API externa
      const response = await axios.get(`http://localhost:5000/countries/${idPais}`);
      const { data } = response;

      // Asumiendo que las actividades turísticas se encuentran en la propiedad "activities" del objeto "data"
      const { cca3, name, capital, population,  } = data;

      // Crea un objeto que combine los datos del país y las actividades
      const countryDetail = {
        cca3,
        name,
        capital,
        population,
        
      };

      res.json(countryDetail);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el país', error: error.message });
  }
});

module.exports = { searchCountriesId };
