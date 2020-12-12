const express = require("express")
const router = express.Router()
const controller = require("../controller/grupoController")


router.get('/', function(request, response){
    response.status(200).send({
        titulo: "API de pesquisa de Grupos de Maracatus no Brasil",
        version: "1.0.0"
    })
})

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