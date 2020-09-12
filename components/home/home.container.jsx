import { useStoreState, useStoreActions } from 'easy-peasy';
import HomeComponent from './home.component';

const Home = () => {
    const movies = useStoreState(state => state.Home.movies);

    let movieList = [];
    if (movies && movies.length > 0) {
        movieList = movies.map(movie => {
            const { id, title, poster_path } = movie;
            return { id, title, poster_path };
        })
    }

    const searchMovies = (searchTerm) => {
        fetchMovies({ query: searchTerm });
    }

    const fetchMovies = useStoreActions(actions => actions.Home.fetchMovies);
    return <HomeComponent movies={movieList} searchMovies={searchMovies} />;
}

export default Home;