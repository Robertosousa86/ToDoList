const express = require('express');
const TaferasController = require('./controllers/TarefasController');

const routes = express.Router();

routes.post('/tarefas', TaferasController.create);
routes.get('/tarefas', TaferasController.index);
routes.put('/tarefas/:id', TaferasController.update);
routes.delete('/tarefas/:id', TaferasController.delete);

module.exports = routes;