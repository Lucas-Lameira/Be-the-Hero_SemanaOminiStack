const connection = require('../database/connection');//importa a conexão com o banco de dados criado no arquivo connection.js
const crypto = require('crypto');

module.exports = {
    //Listar as ONGs
    async index (request, response) {
        const ongs = await connection('ongs').select('*'); //na variavel ongs retornou-se um array
    
        return response.json(ongs);
    },

    //Criar ONGs
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX'); //gera (4) bytes aleatórios que são convertidos em string no formato hexadecimal

        //insere as informações que vieram do request.body e do id na tabela 'ongs'
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id});
    }
}