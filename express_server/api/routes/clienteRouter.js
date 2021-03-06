'use strict';

module.exports = function(app) {
  const clienteController = require('../controllers/clienteController');

  app.route('/')
    .get(clienteController.clienteList)
    .post(clienteController.clienteCreate);

  app.route('/:clienteName')
    .get(clienteController.clienteGet)
    .put(clienteController.clienteUpdate)
    .delete(clienteController.clienteDelete);
};
