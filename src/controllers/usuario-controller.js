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

    app.get('/usuario/email/:email', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const email = req.params.email

        // Pesquisa o usuario no banco de dados
        const usuarioEncontrado = bd.usuarios.filter(usuario=>(usuario.email == email))

        // Retorna o usuário encontrado
        res.json({
            "usuario": usuarioEncontrado,
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

    app.delete('/usuario/email/:email', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const email = req.params.email

        // remove o usuário do banco de dados
        const novoDB = bd.usuarios.filter(usuario=>(usuario.email !== email))
        bd.usuarios = novoDB

        // Resposta com o retorno
        res.json({
            "msg": `Usuário de email ${email} excluido com sucesso`,
            "erro": false
        })
    })

    app.put('/usuario/email/:email', (req, res)=>{
        // Pegando parametro que sera utilizado para o filtro
        const email = req.params.email

        // Pegando o corpo da requisição com as informações
        // que serão atualizados
        const body = req.body

        try {
            // utiliza a classe para validação dos dados recebidos
            const usuarioAtualizado = new Usuario(body.nome, body.email, body.senha)

            // Atualiza o usuario no banco de dados
            bd.usuarios = bd.usuarios.map(usuario => {
                if(usuario.email === email){
                    return usuarioAtualizado
                }
                return usuario    
            });

            // Resposta com o retorno
            res.json({
                "msg": `Usuário ${usuarioAtualizado.email} atualizado com sucesso`,
                "usuario": usuarioAtualizado,
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
