const { request, response } = require("../app")
const grupoCollection = require("../models/grupoSchema")

const getAll = (request, response) => {
    console.log(request.url)

    grupoCollection.find((error, grupos) => {
        if(error){
            return response.status(500).send(error)
        }else{
            return response.status(200).send({
                mensagem: "Pesquisa realizada com sucesso!",
                grupos
            })
        }
    })
}

const addGrupo = (request, response) => {
    console.log(request.url)

    const grupoBody = request.body
    const grupo = new grupoCollection(grupoBody)

    grupo.save((error) => {
        if(error) {
            return response.status(400).send(error)
        } else {
            return response.status(201).json({
                mensagem: "Grupo adicionado com sucesso!",
                grupo
            })
        }
    })
}

const updateGrupo = (request, response) => {
    const idParam = request.params.id
    const grupoBody = request.body
    const novo = { new: true }

    grupoCollection.findByIdAndUpdate(
        idParam,
        grupoBody,
        novo,
        (error, grupo) => {
            if(error) {
                return response.status(500).send(error)
            } else if(grupo) {
                return response.status(200).send({
                    mensagem: "Grupo alterado com sucesso!",
                    grupo
                })
            } else {
                return response.sendStatus(404)
            }
        }
    )
}

const deleteGrupo = (request, response) => {
    const idParam = request.params.id

    grupoCollection.findByIdAndDelete(idParam, (error, grupo) => {
        if (error) {
            return response.status(500).json({
                mensagem: "Grupo não encontrado. Não foi possível apagar."
            })
        } else if (grupo) {
            console.log(grupo)
            return response.status(200).send('Grupo apagado com sucesso!')
        }
    })
}

module.exports = {
    getAll,
    addGrupo,
    updateGrupo,
    deleteGrupo
}