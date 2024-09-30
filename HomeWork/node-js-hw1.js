const http = require('http');

const port = '3000';
let countHome = 0;
let countAbout = 0;    // — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
let countError = 0;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': //— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
            countHome ++;
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'

            })
            res.end(`<div><h1>Это мой сайт</h1></div><a href="/about">Перейти на страницу About</a><p>Просмотров ${countHome} </p>`)
            break;
        case '/about': //А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
            countAbout++;
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'

            })
            res.end(`<div><h1>Страница About</h1></div><a href="/">Перейти на страницу Главная</a><p>Просмотров ${countAbout} </p>`)
            break;
        default: //— Также реализуйте обработку несуществующих роутов (404).
            countError++;
            res.writeHead(404, {
                'Content-Type': 'text/html; charset=utf-8'

            })
        res.end(`<div><h1>!404! Ошибка: такой страницы нет! 404!</h1><p>Просмотров ${countError} </p></div>`)
            break;
    }
});

server.listen(port);