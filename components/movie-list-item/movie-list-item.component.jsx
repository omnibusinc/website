import { MovieListItemWrapper, MoviePoster, MovieTitle } from './movie-list-item.style'
import { shape, number, string } from 'prop-types';
import get from 'lodash/get';

const MovieListItem = ({movie}) => {
    const { id, title } = movie;
    const poster_path = get(movie, 'poster_path');
    const imgPath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/250';
    return (
        <MovieListItemWrapper>
            <MoviePoster src={imgPath} alt={title} />
            <MovieTitle>{title}</MovieTitle>
        </MovieListItemWrapper>
    )
};

MovieListItem.propTypes = {
    movie: shape({
        id: number.isRequired,
        title: string.isRequired,
        poster_path: string,
    })
};

export default MovieListItem;