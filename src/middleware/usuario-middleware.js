// Para usar o middleware para um caminho específico,
// basta colocar o caminho antes da callback

const usuarioMiddleware = (app)=>{

    // Valida se body tem o campo senha
    app.use('/usuario', (req, res, next)=>{
        // verifica se estou usando um metodo POST para fazer a validação
        // Se for metodo GET não faz sentido verificar o body
        if(req.method == "POST"){ 
            const body = req.body
            if(!body.senha)
               res.json({
                   "erro" : true,
                   "msg": "Campo obrigatorio senha não foi enviado"
               })
            else
               next()
        }else{
            next()
        }
    })

    // Valida se o usuário pode entrar
    // A Cinthia não pode!!!!!
    app.use('/usuario', (req, res, next)=>{
        if(req.method === "POST"){ 
            const body = req.body      
            if(body.nome === "Cinthia"){
                res.send("OTAKU FUNKEIRA NAO ENTRA AQUI")
            }else{
                next()
            } 
        }else{
            next()
        }
    })
}

export default usuarioMiddleware