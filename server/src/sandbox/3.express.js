const express = require('express');
const ditto = require('./pokemon/ditto.json');

const PORT = process.env.PORT || 1234;

const app = express();
app.disable('x-powered-by');

app.use((req, res, next) => {
    console.log('First MIDDLEWARE');
    next();
})

app.get('/pokemon/ditto', (req, res) => {
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

app.use((req, res) => {
    res.status(404).send('Que no, que no, que not Found');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
