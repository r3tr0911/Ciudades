//Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.

const express = require('express')
const axios = require('axios')
const searchCountries = express.Router();

searchCountries.get("/countries" , async(req, res) => {
    try {
        //hacemos una peticion a nuestro end point para obtener toda la info
        const response = await axios.get("http://localhost:5000/countries")
        //guardamos toda la info de response
        const countries = response.data
        //guardamos en un json la info y devolvemos la info 
        res.json(countries)

    } catch (error) {
        //manejamos errores por si no podemos obtener la info
        res.status(500).json({mesagge : "Error al traer las ciudades"})
    }
});

module.exports = { searchCountries }

