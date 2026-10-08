'use strict'

import  express  from 'express'; // carregando o express

// carregando framework express na constante app. Támbem daria certo se chame-se com a sintaxe express().get
const app = express();

// Configurando o EJS como nossa engine de visualização (template engine)
// Isso permite usar arquivos .ejs para gerar páginas HTML dinamicamente
app.set('view engine', 'ejs');

// CONFIGURANDO ROTAS (rota é um caminho que o usuário pode acessar via navegador , ou seja, o endereço da página)

// Rota para pagina inicial
app.get('/', (req, res) => {
    res.render('index');
}) 