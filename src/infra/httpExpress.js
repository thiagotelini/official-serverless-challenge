const express = require('express');
const expressAdapter = require('./../adapter/expressAdapter.js');
const funcionarioController = require('../controller/funcionarioController.js');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());
app.get('/', function(req, res) {
    res.send('Rodando!');
})

// rotas do CRUD enviando o request diretamente para o adaptador e passando o obj retornado para controller 
app.post('/funcionario', expressAdapter(funcionarioController.createFuncionario)); // Create
app.get('/funcionario/:id', expressAdapter(funcionarioController.getFuncionario)); // Read
app.put('/funcionario/:id', expressAdapter(funcionarioController.updateFuncionario)); // Update
app.delete('/funcionario/:id', expressAdapter(funcionarioController.deleteFuncionario)); // Delete


//app.listen(3333); // Express rodado localmente
//console.log('Rodando!');
module.exports.handler = serverless(app); // Transforma Express em funções para o Serverless Framework
