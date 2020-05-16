const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const tarefas = await connection('tarefas').select('*');

        return response.json(tarefas);
    },

    async create(request, response, next) {
        try {
            const {
                nome,
                descricao,
                urgencia,
            } = request.body;

            await connection('tarefas').insert({
                nome,
                descricao,
                urgencia,   
            });

            return response.status(201).send();
        } catch (error) {
            next(error);
        }
    }
}