const app = require('express')();
const port = 5000;
const mongoose = require('mongoose');
const Ciente = require('./api/models/clienteModel');
const bodyParser = require('body-parser');

// conexao mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mongo:27017/desafio", {useNewUrlParser: true});

app.use(bodyParser.json());

const routes = require('./api/routes/clienteRouter');
routes(app); // App é passado para routes e gerencia as rotas lá

app.listen(port)
