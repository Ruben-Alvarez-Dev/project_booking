const express = require('express');
const movies = require('./movies.json');

// Create a new Express application
const app = express();
app.disable('x-powered-by');


// Define a route handler
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.get('/movies', (req, res) => {
    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.includes(genre)
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

// Start the server
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
