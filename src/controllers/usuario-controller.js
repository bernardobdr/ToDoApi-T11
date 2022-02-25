const usuarioController = (app)=>{

    app.get('/usuario', (req, res)=>{
        /* 
            alguma funcao que busque/leia coisas
        */

        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "usuarios": []
        })
    })

    app.post('/usuario',(req, res)=>{
        const body = req.body
        /* 
            alguma funcao que insira coisas
        */

        // Resposta com o retorno do processo
        res.json({
            "msg": `Usuário ${body.nome} inserido com sucesso`,
            "usuario": body
        })
    })

}

export default usuarioController
