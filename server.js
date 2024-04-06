const http = require('http');
const fs = require('fs');
const name = process.env.NOME || "Nome Padrão";
const age = process.env.AGE || 0;
const startedAt = new Date();
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Meu nome é ${name} e tenho ${age} ${startedAt}!</h1>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Rota padrão
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlContent);
    }  else if(req.url === '/helthz') {
        var currentDate = new Date();
        var duration = currentDate - startedAt;
        if (duration / 1000 > 25) {
            res.writeHead(500, {'Content-Type': 'text/html'});
        res.end("<h1>duration:</h1>"+duration+", "+duration / 1000);
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("ok");
        }

       
    }
    else if (req.url === '/configmap') {
        const filePath = 'myfamily/myfamily.txt';
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            // Se a leitura for bem-sucedida, 'data' conterá o conteúdo do arquivo como uma string
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>${data}</h1>`);
        });
        
        // Nova rota para configmap
        
    } else {
        // Rota não encontrada
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 - Rota não encontrada');
    }
});

const PORT = 4343;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
