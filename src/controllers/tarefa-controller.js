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

    app.get('/tarefa/titulo/:titulo', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const titulo = req.params.titulo

        // Pesquisa a tarefa no banco de dados
        const tarefaEncontrada = bd.tarefas.filter(tarefa=>(tarefa.titulo == titulo))

        // Retorna a tarefa encontrada
        res.json({
            "tarefa": tarefaEncontrada,
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

    app.delete('/tarefa/titulo/:titulo', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const titulo = req.params.titulo

        // remove a tarefa do banco de dados
        const novoDB = bd.tarefas.filter(tarefa=>(tarefa.titulo !== titulo))
        bd.tarefas = novoDB

        // Resposta com o retorno
        res.json({
            "msg": `Tarefa de título ${titulo} excluida com sucesso`,
            "erro": false
        })
    })

    app.put('/tarefa/titulo/:titulo', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const titulo = req.params.titulo

        // Pegando o corpo da requisição com as informações
        // que serão atualizados
        const body = req.body

        try {
            // utiliza a classe para validação dos dados recebidos
            const tarefaAtualizada = new Tarefa(body.titulo, body.descricao, body.status)

            // Atualiza a tarefa no banco de dados
            bd.tarefas = bd.tarefas.map(tarefa => {
                if(tarefa.titulo === titulo){
                    return tarefaAtualizada
                }
                return tarefa    
            });

            // Resposta com o retorno
            res.json({
                "msg": `Tarefa de titulo ${tarefaAtualizada.titulo} atualizada com sucesso`,
                "tarefa": tarefaAtualizada,
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
