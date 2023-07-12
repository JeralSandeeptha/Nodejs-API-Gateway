const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

//http://localhost:3000         ---> for gateway
//http://localhost:3000/chat    ---> for chat
//http://localhost:3000/feed    ---> for feed

//http://localhost:3000/chat  ------> http://localhost:3001
app.use('/chat', createProxyMiddleware({
    target: 'http://localhost:3001',
    pathRewrite: {
        '^/chat': ''
    }
}));

//http://localhost:3000/feed  ------> http://localhost:3002
app.use('/feed', createProxyMiddleware({
    target: 'http://localhost:3002',
    pathRewrite: {
        '^/feed': ''
    }
}));

app.get('/', (req, res) => {
    res.json('This is the API Gateway');
});

app.listen(3000, () => {
    console.log('API Gateway is running at 3000');
});