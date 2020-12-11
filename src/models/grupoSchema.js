const mongoose = require("mongoose")
const Schema = mongoose.Schema

const grupoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    regiao: {
        type: String,
        required: true
    },
    anoFundacao: {
        type: Date,
        required: false
    },
    descricao: {
        type: String,
        required: true
    }
})

const grupoCollections = mongoose.model('grupo', grupoSchema)

module.exports = grupoCollections