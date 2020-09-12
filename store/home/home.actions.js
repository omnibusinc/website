import { action } from 'easy-peasy';

export const setMessage = action((state, payload) => {
    state.message = payload;
});

export const setMovies = action((state, payload) => {
    const { results } = payload;
    state.movies = results;
});