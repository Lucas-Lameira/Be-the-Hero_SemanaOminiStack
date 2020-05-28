const knex = require('knex'); //importando o knex
const config = require('../../knexfile')//importa as configurações do banco de dados

const connection = knex(config.development);//utiliza as configurações de conexão de development no arquiuvo knexfile.js


//importar em arquivos que precisam se comunicar com o banco de dados
module.exports = connection; // exporta a variavel 'connection' para outros arquivos 