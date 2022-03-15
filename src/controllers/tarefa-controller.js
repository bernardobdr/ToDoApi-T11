import TarefaDAO from '../DAO/TarefaDAO.js'
import Tarefa from '../models/Tarefa.js'

const tarefaController = (app, bd)=>{
    const tarefaDAO = new TarefaDAO(bd)

    app.get('/tarefa', (req, res)=>{
        // Buscando informações no banco de dados
        tarefaDAO.pegaTodasTarefas()
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.get('/tarefa/titulo/:titulo', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const titulo = req.params.titulo

        // Pesquisa a tarefa no banco de dados
        tarefaDAO.pegaUmaTarefa(titulo)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.post('/tarefa',(req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body

        // Como temos validações na nossa model, usamos o try/catch
        // para pegar esse erro e enviar como mensagem para nosso cliente
        try {
            // cria uma instancia de Tarefa com validação dos dados
            // apartir do corpo que foi recebido
            const novaTarefa = new Tarefa(body.titulo, body.descricao, body.status, body.idUsuario)

            // insere a instância da tarefa no banco de dados
            tarefaDAO.insereTarefa(novaTarefa)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })
        } catch (error) {
            // Envia o erro, caso exista
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/tarefa/id/:id', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // remove a tarefa do banco de dados
        tarefaDAO.deletaTarefa(id)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.put('/tarefa/id/:id', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // Pegando o corpo da requisição com as informações
        // que serão atualizados
        const body = req.body

        try {
            // utiliza a classe para validação dos dados recebidos
            const tarefaAtualizada = new Tarefa(body.titulo, body.descricao, body.status, body.idUsuario)

            // Atualiza a tarefa no banco de dados
            tarefaDAO.atualizaTarefa(id, tarefaAtualizada)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
            })

        } catch (error) {
            // Envia o erro, caso exista
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default tarefaController
