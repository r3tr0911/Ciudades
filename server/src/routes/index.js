const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { searchCountries } = require('../controllers/SearchCountries')
const { searchCountriesId } = require('../controllers/SearchCountriesId')
const { searchCountriesName } = require('../controllers/SearchCountriesName')




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter)

router.get('/countries', searchCountries)
router.get('/countries/:idPais', searchCountriesId)
router.get('/countries/name', searchCountriesName)




module.exports = router;
