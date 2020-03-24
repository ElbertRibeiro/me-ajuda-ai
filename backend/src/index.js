const express = require('express');

const app = express();

app.use(express.json());

/*
    GET: listar/buscar uma informação no backend
    POST: Criar uma informação no backend
    PUT: ALterar uma informação
    DELETE: Deletar uma informação
*/

/**
 
    Tipos de parametros:

    Query: Parametors enviados na rota
           após "?" (filros, paginação)
    
    Route:  Parametros ultiliados para 
            indentificar recursos

    Request Body: Corpo da Requisição

 */
 

 /** ------SQLITE---------
  * Driver: SELECT * FROM user
  */
app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Semana Oministack'
    });
})

app.listen(3333);