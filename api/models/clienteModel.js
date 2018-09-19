'use stric';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  name: {
    type: String,
    required: 'Por favor, digite o nome'
  },
  endereco: {
    type: String,
    required: "Por favor, digite o endereço"
  },
  contatos: {
    type: [ { type: Schema.Types.ObjectId, ref: 'Contato' }]
  }
});

const ContatoSchema = new Schema({
  nome:{
    type: String,
    required: "Por favor, digite o nome do contato"
  },
  email: {
    type: String
  },
  telefones: {
    type: [String]
  }
});

Cliente = mongoose.model('Cliente', ClienteSchema);
Contato = mongoose.model('Contato', ContatoSchema);

module.exports = {Cliente, Contato};
