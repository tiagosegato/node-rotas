const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    console.log(`Entrou na Raiz!`);
    res.send(`Bem-vindo a Home!!!`);
});

app.post('/', (req, res) => {
    res.send(`Enviando o método POST, para inserir dados.`);
});

app.put('/', (req, res) => {
    res.send(`Enviando o método PUT, para atualizar dados.`);
});

app.delete('/', (req, res) => {
    res.send(`Enviando o método DELETE, para excluir dados.`);
});


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});