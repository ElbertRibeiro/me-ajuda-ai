const express = require('express');

const routes = express();

routes.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Semana Oministack'
    });
})



module.exports = routes;