const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json('This is feed service');
});

app.get('/posts', (req, res) => {
    res.json('This is feed service posts route');
});

app.listen(3002, () => {
    console.log('Feed service is running at 3002');
});