const z = require('zod');

const schema = z.objectUtil({
    title: z.string({
        invalid_type_error: 'Title must be a string',
        required_error: 'Title is required'
    }),
    year: z.number().int().positive().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10),
    poster: z.string().url({
        message: 'Poster must be a valid URL'
    }),
    genre: z.array(
        z.enum(['Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'Thriller', 'Sci-Fi']),
        {
            required_error: 'Genre is required',
            invalid_type_error: 'Genre must be an array of strings',
            invalid_enum_error: 'Invalid genre'
        }
    )
});

const validateMovie = (object) => {
    return movieSchema.safeParse(object);
};

module.exports = {
    validateMovie
};