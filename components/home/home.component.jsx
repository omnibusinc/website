import MovieList from '../movie-list/movie-list.component';
import { func, arrayOf, number, string } from 'prop-types';
import { HomeWrapper } from './home.styles';

const HomeComponent = ({movies, searchMovies}) => {
    return (
        <HomeWrapper>
            {/* <input type="text" onChange={() => searchMovies(event.target.value)} />
            {
                (movies && movies.length > 0 && <MovieList movies={movies} />)
            } */}
            welcome
        </HomeWrapper>
    )
}

HomeComponent.propTypes = {
    movies: arrayOf({
        id: number.isRequired,
        title: string.isRequired,
        poster_path: string,
    }).isRequired,
    searchMovies: func.isRequired,
}

export default HomeComponent;