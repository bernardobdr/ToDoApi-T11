import Usuario from '../models/Usuario.js'
import UsuarioDAO from '../DAO/UsuarioDAO.js'

const usuarioController = (app, bd)=>{
    const usuarioDAO = new UsuarioDAO(bd)

    app.get('/usuario', (req, res)=>{
        usuarioDAO.pegaTodosUsuarios()
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.get('/usuario/email/:email', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const email = req.params.email

        // Pesquisa o usuario no banco de dados
        usuarioDAO.pegaUmUsuario(email)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.post('/usuario',(req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body

        // Como temos validações na nossa model, usamos o try/catch
        // para pegar esse erro e enviar como mensagem para nosso cliente
        try {
            // cria uma instancia de Usuario com validação dos dados
            // apartir do corpo que foi recebido
            const novoUsuario = new Usuario(body.nome, body.email, body.senha)

            // insere a instância do usuario no banco de dados
            usuarioDAO.insereUsuario(novoUsuario)
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

    app.delete('/usuario/id/:id', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // remove o usuário do banco de dados
        usuarioDAO.deletaUsuario(id)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.put('/usuario/id/:id', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const id = req.params.id

        // Pegando o corpo da requisição com as informações
        // que serão atualizados
        const body = req.body

        try {
            // utiliza a classe para validação dos dados recebidos
            const usuarioAtualizado = new Usuario(body.nome, body.email, body.senha)

            // Atualiza o usuario no banco de dados
            usuarioDAO.atualizaUsuario(id, usuarioAtualizado)
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

export default usuarioController
