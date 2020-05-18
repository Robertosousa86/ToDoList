const connection = require('../database/connection');

module.exports = {
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
    },

    async index(request, response) {
        const tarefas = await connection('tarefas').select('*');
        return response.json(tarefas);
    },

    async update(request, response, next) {
        try {
            const {
                nome,
                descricao,
                urgencia
            } = request.body;

            const {id} = request.params;

            await connection('tarefas')
                .update({
                    nome,
                    descricao,
                    urgencia
                })
                .where({id});

            return response.send();

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next){
        try {
            const {id} = request.params;

            await connection('tarefas')
            .where({id})
            .delete();
            
            return response.send();
            
        } catch (error) {
            next(error);
        }
    }
}