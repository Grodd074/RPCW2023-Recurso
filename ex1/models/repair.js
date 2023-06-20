var mongoose = require('mongoose')

var intervencaoSchema = new mongoose.Schema({
    codigo: String,
    nome: String,
    descricao: String
})

var viaturaSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    matricula: String
})

var repairSchema = new mongoose.Schema({
	nome: String,
	nif: Number,
    data: String,
    viatura: viaturaSchema,
    nr_intervencoes: Number,
    intervencoes: [intervencaoSchema]
})

module.exports = mongoose.model('repair', repairSchema)