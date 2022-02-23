import express from "express";

const app = express()
const port = 3000

app.get('/usuario', (req, res)=>{
    res.send('Rota GET para entidade usuário')
})

app.get('/tarefa', (req, res)=>{
    res.send('Rota GET para entidade tarefa')
})


app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})