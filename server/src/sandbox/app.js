const express = require('express');
const crypto = require('node:crypto');
const movies = require('./movies.json');

// Create a new Express application
const app = express();
app.disable('x-powered-by');

// Middleware
app.use(express.json());

// Define a route handler
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.get('/movies', (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies);
    }
    res.json(movies);
});
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);
    if (movie) return res.json(movie);
    res.status(404).json({ message: 'Movie not found' });
});
app.post('/movies', (req, res) => {
    const {
        title,
        genre,
        year,
        director,
        duration,
        rate,
        poster
    } = req.body;
    const newMovie = {
        id: crypto.randomUUID(),
        title,
        genre,
        director,
        year,
        duration,
        rate: rate ?? 0,
        poster
    }
    movies.push(newMovie);
    res.status(201).json(newMovie);
    }
)


// Start the server
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
