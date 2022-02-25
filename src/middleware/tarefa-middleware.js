// Para usar o middleware para um caminho específico,
// basta colocar o caminho antes da callback

const tarefaMiddleware = (app)=>{

    // Valida se body tem o campo titulo
    app.use('/tarefa', (req, res, next)=>{
        // verifica se estou usando um metodo POST para fazer a validação
        // Se for metodo GET não faz sentido verificar o body
        if(req.method === "POST"){
            const body = req.body
            if(body.titulo){
                next()
            }else{
                res.json({
                    "erro" : true,
                    "msg" : "Campo titulo não encontrado"
                })
            }
        }else{
            next()
        }
    })
}

export default tarefaMiddleware