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

    /*
    //Listar todos os casos CASOS 
    async index (request, response) {
        const incidents = await connection('incidents').select('*');

        return response.json(incidents);
    },
    */
    
    //Listasr os casos com paginação
    async index (request, response) {
        const {page = 1} = request.query;//query params na url, se o parametro não existir o page será igual a 1

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id' ) //relacionar dados de duas tabelas. 'tabela', 'tabela.id', '=', 'incidents.ong_id' 
        .limit(5) //exibir cinco incidents por pagina
        .offset((page -1 ) * 5) //comeca do zero ate o cinco
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);//passando o total de incidents pelo cabecalho da resposta. console.log(count)

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