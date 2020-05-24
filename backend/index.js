const express = require('express'); //importação de modulo 'express'

const app = express(); //Variável que armazena a aplicação

app.get('/', (request, response) => {
    //return response.send("hello world"); //o parametro response manda a resposta pro navegador por meio do método send() 
    
    return response.json({
        evento: "Hello world"
    })//os dados enviados para o navegador podem ser em json

}); //acessando a rota raiz no navegador, o segundo parametro é uma função

app.listen(3333); //ouvindo a porta 3333, quando acessar localhost:3333 a aplicação será acessada

