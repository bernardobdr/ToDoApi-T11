import Usuario from '../models/Usuario.js'

const usuarioController = (app, bd)=>{

    app.get('/usuario', (req, res)=>{
        // Buscando informações no banco de dados
        const todosUsuarios = bd.usuarios

        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "usuarios": todosUsuarios,
            "erro": false
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
            bd.usuarios.push(novoUsuario)

            // Resposta com o retorno do processo
            res.json({
                "msg": `Usuário ${novoUsuario.nome} inserido com sucesso`,
                "usuario": novoUsuario,
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

export default usuarioController
