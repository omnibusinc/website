import { thunk } from 'easy-peasy';

const apiKey = 'a99cc60fc2b34dbb18cb806b8a88ed14'
const movieDbEndpointPrefix = 'https://api.themoviedb.org/3/search/movie';

export const updateMessage = thunk(async (actions, payload) => {
    return await Promise.resolve(actions.setMessage(payload));
});

export const fetchMovies = thunk(async (actions, payload) => {
    const { query } = payload;
    const endpoint = `${movieDbEndpointPrefix}?query=${query}&api_key=${apiKey}`;
    const results = await fetch(endpoint);
    const movies = await results.json();
    return await Promise.resolve(actions.setMovies(movies));
});
