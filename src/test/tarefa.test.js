// importa o framework que faz a requisição
// para testar nossa requisição
import request from 'supertest'
// importa o app para ter acesso as rotas
import app from '../app.js'

// O describe serve para agrupar varios test e deixar mais
// organizado
describe('GET /tarefa', ()=>{
    test('Se o status é 200', ()=>{
        // Faz uma requisição para rota get /tarefa
        // como o retorno é uma promise, precisamos
        // executar com .then. A resposta vem com 
        // todos os itens de uma requisição HTTP
        // status, header, body.
        // Caso queira saber o que tem, da um console.log
        return request(app).get('/tarefa')
        .then((response)=>{
            console.log(response)
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('POST /tarefa', ()=>{
    test('Se o body existe', ()=>{
        // No teste de uma rota post é possivel enviar um body
        // com o .send().
        return request(app).post('/tarefa')
        .send({
            "titulo" : "titulo",
            "descricao" : "descricao",
            "status" : "A fazer",
            "idUsuario": 1
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.mensagem).toBeTruthy()
        })   
    })

    test('Status invalido', ()=>{
        return request(app).post('/tarefa')
        .send({
            "titulo" : "titulo",
            "descricao" : "descricao",
            "status" : "status errado",
            "idUsuario": 1
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.erro).toBeTruthy()
        }) 
    })

})