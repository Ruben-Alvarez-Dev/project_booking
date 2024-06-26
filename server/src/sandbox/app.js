const express = require('express');
const crypto = require('node:crypto');
const movies = require('./movies.json');
const { validateMovie, validatePartialMovie } = require('./schemas/movies.js');

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
    const result = validateMovie(req.body);
    if (result.error) {
        return res.status(400).json({
            error: JSON.parse(result.error.message)
        });
    }

     const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    };
    
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

app.patch('/movies/:id', (req, res) => {
    const result = validatePartialMovie(req.body);
    if (!result.success) {return res.status(400).json({error: JSON.parse(result.error.message)})};
    
    const { id } = req.params;
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
        return res.status(404).json({ message: 'Movie not found' });
    };
    
    const updatedMovie = {
        ...movies[movieIndex],
        ...result.data
    };

    return res.json(updatedMovie);
});




// Start the server
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
