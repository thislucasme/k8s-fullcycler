// Importa o módulo HTTP do Node.js
const http = require('http');

// Define o conteúdo HTML que será enviado como resposta
const name = process.env.NOME || "Nome Padrão";
const age = process.env.AGE || 0;
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Meu nome é ${name} e tenho ${age}!</h1>
</body>
</html>
`;

// Cria um servidor HTTP
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta indicando que o conteúdo é HTML
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Envia o conteúdo HTML como resposta
    res.end(htmlContent);
});

// Define a porta em que o servidor irá ouvir
const PORT = 4343;

// Inicia o servidor, ouvindo na porta especificada
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
