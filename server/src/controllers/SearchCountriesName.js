//Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido
const express = require('express')
const axios = require('axios')
const { Country, Activity } = require('../db')
const { Op } = require('sequelize'); 

const searchCountriesName = express.Router();

searchCountriesName.get("/countries/name", async (req, res) => {
    const { name } = req.query 

    try {
        const dbCountries = await Country.findAll({
            where: {
                [Op.or]: [
                    {
                      '$name.common$': {
                        [Op.iLike]: `%${name.trim()}%`,
                      },
                    },
                    
                  ],
            },
            include: Activity,
            limit: 15
        })
        
        const response = await axios.get(`http://localhost:5000/drivers?name.common=${name}`);
        const apiCountries = response.data;

        const combinedCountries = [...dbCountries, ...apiCountries]
        if (combinedCountries){
            return res.status(200).json(combinedCountries)
        } else {
            return res.status(404).json({message: "No se encontraron ciudades con ese nombre."})
        }


    } catch (error) {
        return res.status(500).json({ message: "Error al buscar ciudades por nombre.", error: error.message });
    }
})

module.exports = { searchCountriesName }