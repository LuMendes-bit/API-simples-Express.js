const express = require("express")
const app = express()

app.get('/', function(request, response){
    console.log("rota / acessada")
    response.send("Bem-vindo à API da turma!")
})

app.get('/sobre',function(request, response){
    console.log("rota /sobre acessada")
    response.send("Essa é uma API feita com Express.js!")
})

app.get('/alunos',function(request, response){
    console.log("rota /alunos acessada")
    response.send("lista de alunos: [Lucas],[Mathe]")
})

app.get('/professor',function(request, response){
    console.log("rota /professor acessada")
    response.send("Nome do professor: Kaique junior covo")
})

app.get('/horario',function(request, response){
    console.log("rota /horario acessada")
    response.send("Aulas de segunda à sexta, das 19h às 22h")
})

const port = 8080

app.listen(port, function(){
    console.log("Servidor rodando!")
})