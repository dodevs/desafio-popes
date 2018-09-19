const app = require('express')(), port = 5000;

const mongoose = require('mongoose');
require('./api/models/clienteModel');

const bodyParser = require('body-parser');

// conexao mongoose
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true});

// executar apos conexao
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    app.use(bodyParser.json());

    const routes = require('./api/routes/clienteRouter');
    routes(app); // App é passado para routes e gerencia as rotas lá

    app.listen(port)
});
