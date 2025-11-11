//import express from "express"; Se importar assim tem que usar o modules

const express = require('express'); //importa o express para o projeto

const app = express(); // atribui toda a "função" Express para a const app

const PORT = 3000; // atribui a porta padrão a uma constante

//IMPLEMENTAÇÃO DAS ROTAS
// req - informações de quem está enviando a requisição
// res - o que a aplicação responde de volta

// app.get('/', (req, res) => {
//     console.log(`Entrou na Raiz!`);
//     res.send(`Bem-vindo a Home!!!`);
// });

// app.post('/', (req, res) => {
//     res.send(`Enviando o método POST, para inserir dados.`);
// });

// app.put('/', (req, res) => {
//     res.send(`Enviando o método PUT, para atualizar dados.`);
// });

// app.delete('/', (req, res) => {
//     res.send(`Enviando o método DELETE, para excluir dados.`);
// });

//Função que fica "ouvindo" tudo que acontece na porta definida
app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});