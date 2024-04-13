const express = require('express');
const ditto = require('./pokemon/ditto.json');
const app = express();
app.disable('x-powered-by');

const PORT = process.env.PORT || 1234;

app.get('/', (req, res) => {
    res.json(ditto);
});

app.post('/pokemon', (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        res.status(201).json(data);
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
