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
* [SQLite](https://www.npmjs.com/package/sqlite3)  v.5.0.0
* [Jest](https://jestjs.io/docs/getting-started)   v.27.5.1
* [Supertest](https://www.npmjs.com/package/supertest) v.6.2.2

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

### Usuário

 * **GET /usuario**
 
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

 * **GET /usuario/email/{email}**
 
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

 * **POST /usuario**

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

 * **PUT /usuario/id/{id}**

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

 * **DELETE /usuario/id/{id}**

    Schema da resposta
    ```
    {   
        msg: <String>
        erro: <Boleano>
    }
    ```

### Tarefa

 * **GET /tarefa**
    
    Schema da resposta
    ```
    {
        tarefas: [
            {
                "titulo" : <String>,
                "descricao: <String>,
                "status" : <String>
                "dataCriação" : <String>,
                "idUsuario" : <Int>
            }
        ],
        erro: <Boleano>

    }
    ```


 * **GET /tarefa/titulo/{titulo}**

    Schema da resposta
    ```
    {
        tarefas: [
            {
                "titulo" : <String>,
                "descricao: <String>,
                "status" : <String>
                "dataCriação" : <String>,
                "idUsuario" : <Int>
            }
        ],
        erro: <Boleano>

    }
    ```


 * **POST /tarefa**

      Schema da requisição
    ```
    {
        "titulo" : <String>,
        "descricao: <String>,
        "status" : #{"Fazendo", "A fazer", "Feito"},
        "idUsuario" : <Int>
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
            "dataCriação" : <String>,
            "idUsuario" : <Int>
        },
        erro: <Boleano>
    }
    ```

 * **PUT /tarefa/id/{id}**

      Schema da requisição
    ```
    {
        "titulo" : <String>,
        "descricao: <String>,
        "status" : #{"Fazendo", "A fazer", "Feito"},
        "idUsuario" : <Int>
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
            "dataCriação" : <String>,
            "idUsuario" : <Int>
        },
        erro: <Boleano>
    }
    ```


 * **DELETE /tarefa/id/{id}**

    Schema da resposta
    ```
    {
        msg: <String>
        erro: <Boleano>
    }
    ```

---

## Rodando teste
Para rodar os teste, utilizando o framework `Jest` e o [`Supertest`](https://jestjs.io/pt-BR/docs/testing-frameworks#expressjs) basta rodar o comando abaixo:
```
npm test
```

## Sobre as branches
Com o objetivo de manter o histórico da evolução do projeto de fácil acesso, cada branch desse repositório irá representar o estado do projeto ao final da aula.
