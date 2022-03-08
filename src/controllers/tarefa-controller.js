import Tarefa from '../models/Tarefa.js'

const tarefaController = (app, bd)=>{
    app.get('/tarefa', (req, res)=>{
        // Buscando informações no banco de dados
        const todasTarefas = bd.tarefas

        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "tarefas": todasTarefas,
            "erro": false
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
            const novaTarefa = new Tarefa(body.titulo, body.descricao, body.status)

            // insere a instância da tarefa no banco de dados
            bd.tarefas.push(novaTarefa)

            // Resposta com o retorno do processo
            res.json({
                "msg": `Tarefa com título ${novaTarefa.titulo} inserida com sucesso`,
                "tarefas": novaTarefa,
                "erro": false
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
