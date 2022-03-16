// importa o framework que faz a requisição
// para testar nossa requisição
import request from 'supertest'
// importa o app para ter acesso as rotas
import app from '../app.js'

// O describe serve para agrupar varios test e deixar mais
// organizado
describe('GET /usuarios', ()=>{
    test('Se o status é 200', ()=>{
        // Faz uma requisição para rota get /usuarios
        // como o retorno é uma promise, precisamos
        // executar com .then. A resposta vem com 
        // todos os itens de uma requisição HTTP
        // status, header, body.
        // Caso queira saber o que tem, da um console.log
        return request(app).get('/usuario')
        .then((response)=>{
            console.log(response)
            expect(response.statusCode).toBe(200)
        })
    })
})

describe('POST /usuarios', ()=>{
    test('Se o body existe', ()=>{
        // No teste de uma rota post é possivel enviar um body
        // com o .send().
        return request(app).post('/usuario')
        .send({
            "nome" : "nome",
            "senha" : "abd1234",
            "email" : "e@e.com"
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.mensagem).toBeTruthy()
        })
    })

    test('Erro com senha invalida', ()=>{
        // No teste de uma rota post é possivel enviar um body
        // com o .send().
        return request(app).post('/usuario')
        .send({
            "nome" : "nome",
            "senha" : "abd1",
            "email" : "e@e.com"
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.erro).toBeTruthy()
        })
    })

})