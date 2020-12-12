const mongoose = require("mongoose")

const dotenv = require('dotenv')

dotenv.config()

const DB_URI = process.env.DB_URI
const port = process.env.port || 3030

const connect = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    const connection = mongoose.connection

    connection.on('error', () => console.error('Erro ao se conectar no Banco de Dados'))
    connection.once('open', () => console.log('Conectamos no Banco de Dados com sucesso!'))
}

module.exports = { connect }