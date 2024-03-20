const express = require('express')
const router = express.Router()
const usuariosAPI = require('../../controllers/api/usuariosAPI')

router.get('/', usuariosAPI.list)

router.post('/nuevotweet', usuariosAPI.createtwit)
router.post('/nuevousuario', usuariosAPI.createusuario)

module.exports = router