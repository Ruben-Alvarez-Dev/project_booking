const express = require('express');
const ditto = require('./pokemon/ditto.json');

const PORT = process.env.PORT || 1234;

// Create an express app
const app = express();
app.disable('x-powered-by');

// Middleware
app.use(express.json());
/* app.use((req, res, next) => {
    if (req.method !== 'POST') return next();
    if (req.headers['content-type'] !== 'application/json') return next();

    // Only arrive here POST & Content-Type: application/json
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
       const data = JSON.parse(body);
       data.timestamp = Date.now();
       req.body = data;
       next();
    });
}) */

// HTTP Methods
app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto);
});

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body);
})

// Error handling
app.use((req, res) => {
    res.status(404).send('Que no, que no, que not Found');
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
