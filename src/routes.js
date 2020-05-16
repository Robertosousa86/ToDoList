const express = require('express');
const TaferasController = require('./controllers/TarefasController');

const routes = express.Router();

routes.get('/listar-tarefas', TaferasController.index);
routes.post('/tarefas', TaferasController.create);

module.exports = routes;