const express = require('express');//importação de modulo 'express'

const app0 = express();//Variável que armazena a aplicação

app0.use(express.json());//Necessário para usar json nas requisiçoes, caso nao use essa linha de código, o retorno do request será undefined. O express converte o json no corpo da requisição em um objeto javascript

    //Acessar os query params 
    app0.get('/Users', (request, response) => {
        
        const query = request.query; //http://localhost:3333/users?nome=lucas&idade=24
        console.log(query);
        
        return response.json({
            evento: "valor"
        })
    });
    

    //Acessar os Route params
    app0.get('/Users/:id', (request, response) => {
        
        const id = request.params; //http://localhost:3333/users/1
        console.log(id);

        return response.json({
            evento: "valor"
        })
    });
    

    //Acessar o Request Body params
    app0.post('/Users',(request, response) => {
        const body = request.body;
        console.log(body);
        return response.json({
            evento: "valor "
        })
    });

    app.listen(3333); //ouvindo a porta 3333, quando acessar localhost:3333 a aplicação será acessada
    
    
    //return response.send("hello world"); //o parametro response manda a resposta para o navegador por meio do método send() 