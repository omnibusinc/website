import { setMessage, setMovies } from './home.actions';
import { updateMessage, fetchMovies } from './home.action-creators';

const homeModel = {
    message: "Hello Circle!",
    setMessage,
    updateMessage,
    setMovies,
    fetchMovies
};

export default homeModel;