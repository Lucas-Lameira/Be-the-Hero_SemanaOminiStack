//controller de login no sistema

const connection = require('../database/connection');

module.exports = {
    //login
    async create(request, response){
       
        const {id} = request.body;
    
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();//retornar apenas um resultado

        console.log(ong)
        if(!ong){
            return response.status(400).json({ error: "Nenhuma ONG encontrada com esse ID"}); //bad request
        }

        return response.json(ong);
    },
}
