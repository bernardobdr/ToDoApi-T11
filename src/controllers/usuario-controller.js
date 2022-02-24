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
        /* 
            alguma funcao que insira coisas
        */

        // Resposta com o retorno do processo
        res.json({
            "msg": "Usuario inserido com sucesso"
        })
    })

}

export default usuarioController
