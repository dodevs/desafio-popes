'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContatoSchema = new Schema({
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
})

module.exports = mongoose.model('Contato', ContatoSchema)
