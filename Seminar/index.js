// function counter(n) {
//     console.log(n);
//     setTimeout(() => counter(n + 1), 0);
// }

// counter(0);

// setTimeout(() => {
//     console.log('Скрипт успешно завершен!');
//     process.exit()
// }, 1000);


const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    console.log('Запрос получен');
    res.end('<h1> Привет </h1>')
});

const port = '3000';

server.listen(port);