'use stric';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContatoSchema = new Schema({
    clienteId: {type: Schema.Types.ObjectId, ref: 'Cliente'},
    nome:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefones: {
        type: [String],
        required: true
    }
});


const ClienteSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  contatos: [ ContatoSchema ]
});

mongoose.model('Contato', ContatoSchema);
module.exports = mongoose.model('Cliente', ClienteSchema);
