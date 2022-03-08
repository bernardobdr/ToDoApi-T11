# :construction: WIP - ToDo API - T11 - Resilia

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Objetivo
Esse projeto tem como objetivo criar uma API RESTful de uma To Do List, onde será possível aplicar as operações CRUD nas entidades `Usuario` e `Tarefa`.

## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1

## Pacotes utilizados
* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone git@github.com:cinmcantu/ToDoApi-T11.git
```
Entrando na pasta:
```
cd ToDoApi-T11
```

Instalando os pacotes:
```
npm install
```

Iniciando o servidor:
```
npm start
```

---

## Rotas implementadas

#### Usuário
 * GET /usuario
 
    Schema da resposta
    ```
    {
        usuarios: [
            {
                "nome" : <String>,
                "usuario: <String>,
                "senha" : <String>
            }
        ],
        erro: <Boleano>

    }
    ```

 * POST /usuario

     Schema da requisição
    ```
    {
        "nome" : <String>,
        "usuario: <String>,
        "senha" : <String>
    }
    ```

    Schema da resposta
    ```
    {   
        msg: <String>
        usuario: {
            "nome" : <String>,
            "usuario: <String>,
            "senha" : <String>
        },
        erro: <Boleano>
    }
    ```

#### Tarefa
 * GET /tarefa
    
    Schema da resposta
    ```
    {
        tarefas: [
            {
                "titulo" : <String>,
                "descricao: <String>,
                "status" : <String>
                "dataCriação" : <String>
            }
        ],
        erro: <Boleano>

    }
    ```


 * POST /tarefa

      Schema da requisição
    ```
    {
        "titulo" : <String>,
        "descricao: <String>,
        "status" : #{"Fazendo", "A fazer", "Feito"}
    }
    ```

    Schema da resposta
    ```
    {
        msg: <String>
        tarefa: {
            "titulo" : <String>,
            "descricao: <String>,
            "status" : <String>
            "dataCriação" : <String>
        },
        erro: <Boleano>
    }
    ```


---

## Sobre as branches
Com o objetivo de manter o histórico da evolução do projeto de fácil acesso, cada branch desse repositório irá representar o estado do projeto ao final da aula.
