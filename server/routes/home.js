const express = require('express');
const router = express.Router();
const controlador = require('../controllers/home')

router.get('/', controlador.landing)


module.exports = router;