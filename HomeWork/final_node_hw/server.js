const fs = require('fs');
const express = require('express');
const app = express();
app.use(express.json());

const FILE_PATH = './users.json';

// Функция для чтения пользователей из файла
function readUsersFromFile() {
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Ошибка при чтении файла:', err);
        return [];
    }
}

// Функция для записи пользователей в файл
function writeUsersToFile(users) {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2), 'utf8');
    } catch (err) {
        console.error('Ошибка при записи файла:', err);
    }
}

// Получение всех пользователей
app.get('/users', (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
});

// Получение пользователя по id
app.get('/users/:id', (req, res) => {
    const users = readUsersFromFile();
    const user = users.find(u => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Пользователь не найден');
    }
});

// Создание нового пользователя
app.post('/users', (req, res) => {
    const users = readUsersFromFile();
    const newUser = { id: Date.now().toString(), ...req.body };
    users.push(newUser);
    writeUsersToFile(users);
    res.status(201).json(newUser);
});

// Обновление пользователя
app.put('/users/:id', (req, res) => {
    const users = readUsersFromFile();
    const userIndex = users.findIndex(u => u.id === req.params.id);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        writeUsersToFile(users);
        res.json(users[userIndex]);
    } else {
        res.status(404).send('Пользователь не найден');
    }
});

// Удаление пользователя
app.delete('/users/:id', (req, res) => {
    let users = readUsersFromFile();
    const userIndex = users.findIndex(u => u.id === req.params.id);

    if (userIndex !== -1) {
        users = users.filter(u => u.id !== req.params.id);
        writeUsersToFile(users);
        res.send('Пользователь удалён');
    } else {
        res.status(404).send('Пользователь не найден');
    }
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
