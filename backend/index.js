const express = require('express');

const app = express();

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

 */
 
app.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json({
        evento: 'Semana Oministack'
    });
})

app.listen(3333);