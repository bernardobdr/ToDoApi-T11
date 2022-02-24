const tarefaController = (app)=>{
    app.get('/tarefa', (req, res)=>{
        /* 
            alguma funcao que busque/leia coisas
        */

        //Resposta com o retorno daquilo que eu busquei
        res.json({
            "Tarefas": []
        })
    })

    app.post('/tarefa',(req, res)=>{
        /* 
            alguma funcao que insira coisas
        */

        // Resposta com o retorno do processo
        res.json({
            "msg": "Tarefa inserida com sucesso"
        })
    })
}

export default tarefaController
