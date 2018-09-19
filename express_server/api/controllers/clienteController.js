'use stric';

const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');

//clienteList, clienteCreate, clienteGet, clienteUpdate, clienteDelete

exports.clienteList = function(req, res) {
  Cliente.find({}, function(err, cliente) {
    if (err)
      res.send(err);
    res.json(cliente);
  });
};

exports.clienteCreate = function(req, res) {
  let new_Cliente = new Cliente(req.body);
  new_Cliente.save(function(err, cliente){
    if(err)
      res.send(err);
    res.json(cliente);
  });
};

exports.clienteGet = function(req, res) {
  Cliente.findOne( {'nome': req.params.clienteName}, function(err,cliente) {
    if(err)
      res.send(err);
    res.json(cliente);
  });
};

exports.clienteUpdate = function(req, res) {
  Cliente.findOneAndUpdate({'nome': req.params.clienteName}, req.body, {new: true}, function(err, cliente){
    if(err)
      res.send(err);
    res.json(cliente);
  });
};

exports.clienteDelete = function(req, res) {
  Cliente.remove({'nome': req.params.clienteName}, function(err, cliente){
    if(err)
      res.send(err);
    res.json({ message: "Cliente deletado com sucesso"});
  });
};
