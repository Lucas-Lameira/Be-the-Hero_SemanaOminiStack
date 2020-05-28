const express = require('express'); //importação de modulo 'express'
const routes = require('./routes');//importa a variavel routes do arquivo routes.js que foi criado. o ./ indica que é um arquivo e nao um pacote 
const cors = require('cors');//modulo de segurança

const app = express(); //Variável que armazena a aplicação

app.use(cors());
app.use(express.json()); 
app.use(routes); 

app.listen(3333); //ouvindo a porta 3333, quando acessar localhost:3333 a aplicação será acessada
