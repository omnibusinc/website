import { arrayOf, object, number, string } from "prop-types";
import MovieListItem from "../movie-list-item/movie-list-item.component";
import { MovieListWrapper } from "./movie-list.styles";

const MovieList = ({movies}) => {
    return (
        <MovieListWrapper>
            {
                movies.map(movie => <MovieListItem movie={movie} key={movie.id} />)
            }
        </MovieListWrapper>
    )
}

MovieList.propTypes = {
    movies: arrayOf({
        id: number.isRequired,
        title: string.isRequired,
        poster_path: string,
    }).isRequired
};

export default MovieList;