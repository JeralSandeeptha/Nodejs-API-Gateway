const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('This is chat service');
});

app.get('/friends', (req, res) => {
    res.json('This is chat service friends route');
});

app.listen(3001, () => {
    console.log('Chat service is running at 3001');
});