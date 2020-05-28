//Arquivo que armazena as rotas da aplicação
const express = require('express');
const routes = express.Router(); //usando o módulo de rotas do expresse em uma nova variável

const crypto = require('crypto'); //pacote que vem junto com o node. Utilizar um método do crypto para gerar uma string aleatória

const OngController = require('./controllers/OngController'); 
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');

//Arquivos com os Códigos na pasta controllers


routes.get('/ongs', OngController.index);//Rota para listar ONGs
routes.post('/ongs', OngController.create);//Rota para criar ONGs 

routes.get('/incidents', incidentController.index);//Rota para listar os casos (incidents)
routes.post('/incidents', incidentController.create);//Rota para criar casos (incidents)
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', ProfileController.index);//Rota para listar casos especificos de uma ong

module.exports = routes; //exporta a variavel routes deste arquivo, para que outros arquivos possam acessar esta variavel.