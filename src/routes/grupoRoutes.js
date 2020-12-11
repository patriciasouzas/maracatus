const express = require("express")
const router = express.Router()
const controller = require("../controller/grupoController")


/**
 @route GET grupo
 @desc Pesquisa todos os grupos cadastrados
 @access Public
 @endpoint http://localhost:porta/grupos
 **/
router.get('/grupos', controller.getAll)

/**
 @route POST grupo
 @desc Cria um novo grupo no cadastro
 @access Public
 @endpoint http://localhost:porta/grupos/adicionar
 **/
router.post('/adicionar', controller.addGrupo)

/**
 @route PUT grupo
 @desc Altera um grupo existente a partir do ID
 @access Public
 @endpoint http://localhost:porta/grupos/alterar/:id
 **/
router.put('/alterar/:id', controller.updateGrupo)

/**
 @route DELETE grupo
 @desc Apaga um grupo existente a partir do ID
 @access Public
 @endpoint http://localhost:porta/grupos/apagar/:id
 **/
router.delete('/apagar/:id', controller.deleteGrupo)

module.exports = router