const express = require('express');
const { Activity, Country } = require('../db');

const createActivities = express.Router();

createActivities.post('/activities', async (req, res) => {
  try {

    const {Nombre, Dificultad, Duracion, Temporada, Paises} = req.body;


    if (!Nombre || !Dificultad || !Duracion || !Temporada || !Paises) {
      // si es así entonves requerimos de esos datos 
      return res.status(400).json({ message: 'Faltan datos requeridos.' });
    }
    const newActivity = await Activity.create({
      Nombre,
      Dificultad,
      Duracion,
      Temporada,
      Paises
    });


    

    return res.status(201).json({ message: 'Actividad creada exitosamente', activity: newActivity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la actividad', error: error.message });
  }
});

module.exports = { createActivities };
