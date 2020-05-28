const connection = require('../database/connection');

module.exports = {
    //Criar CASOS
    async create(request, response) {
        const {title, description, value} = request.body;

        const ong_id = request.headers.authorization; //campo(Authorization) no cabeçalho da requisição que recebe o id da ong
        
        const [id] = await connection ('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({id});
    },

    //Listar CASOS
    async index (request, response) {
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },

    //Deletar CASOS
    async delete (request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id').first();

        if(incident.ong_id != ong_id) {
            return response.status(401)
            .json({error: 'operação não permitida'});//401 não autorizado
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}