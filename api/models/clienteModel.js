'use stric';
const mongoose = require('mongoose');
const Schema - mongoose.Schema;

let ClienteSchema = new Schema({
  name: {
    type: String,
    required: 'Por favor, digite o nome'
  },
  endereco: {
    type: String,
    required: "Por favor, digite o endereço"
  },
  contatos: {
    type: [ContatoSchema]
  }
});

module.exports = mongoose.model('Cliente', ClienteSchema)
