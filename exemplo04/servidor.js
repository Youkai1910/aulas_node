// subindo um servidor uitilizando o nodeJS
import http from 'http'; // importando módulo nativo do node

import fs from 'fs/promises'; // importando módulo FS - File System

const monitorRequisicao = (req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { "Content-Typye": "text/html ; charset=utf-8" })
            // carregar e eler o conteudo do arquivo index.html
            fs.readFile('paginas/index.html')
                .then(conteudo => res.end(conteudo));
            break;

        case '/sobre':
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
            /* carregar/ler o conteúdo da página sobre.html */
            fs.readFile('paginas/sobre.html')
                .then(conteudo => res.end(conteudo));
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
            /* carregar/ler o conteúdo da página 404.html */
            fs.readFile('paginas/404.html')
                .then(conteudo => res.end(conteudo));
    }
} // arrow function

//servidor
const servidor = http.createServer(monitorRequisicao);

servidor.listen(80, () => {
    console.log("Servidor rodando...")   
});