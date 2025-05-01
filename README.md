# Tutorial para a disciplina de Programação Web Back-End período 2025-1

## 1 - Requisitos do ambiente:
1. Node v22.14.0
[Instalação do node](https://nodejs.org/pt/download).
Seguir os passos de acordo com o Sistema Operacional utilizado.
2. NPM 10.9.2
Normalmente é instalado junto com o Node.

## 2 - Criaçao do projeto Hello World com Express

Executar os comandos:
1. criação do arquivo de configuração do projeto.
```
npm init --yes
```
2. instalação framework express.
```
npm install express
```
3. Acessar [Express](https://expressjs.com/) para código de hello world e documentação.
Copiar o código de "hello world" do site e colar no arquivo index.js
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

``` 
4. Instação e configuração do Nodemon
Evitar ter que ficar parando e reiniciando o servidor a cada alteração no projeto.
```
npm install nodemon
```
Acrescentar o script de inicialização na configuração.
No arquivo package.json adicionar o script de start. Altere a propriedade "scripts" para ficar como a seguir:
```
"scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```
A partir de agora para iniciar o projeto iremos utilizar o comando
```
npm start
```

