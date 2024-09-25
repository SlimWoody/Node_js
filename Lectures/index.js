const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    if(req.url === '/'){
        console.log('Да');
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Добро пожаловать на мой сайт</h1>');
    }else if (req.url === '/about') {
        console.log('Да');
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>About</h1>');
    }else{
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end('<h1>Страница не найдена</h1>');
    }
});

const port = 3000;

server.listen (port, () => {console.log('Серевер запущен на порту' , port);})