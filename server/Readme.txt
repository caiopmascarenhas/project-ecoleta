//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//Request Param: Parametros que vem na propria rota que identificam um recurso
//Query Param: Parametros que vem na propria rota geralmente opcionais para filtros,paginação
//Request body: parametros para criação/atualização de informação



app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id]
    return response.json(user)
})

app.post('/users', (request, response) => {
    const data = request.body;
    const user = {
        nome: data.name,
        email: data.email
    }
    console.log(data)
    return response.json(user)
})