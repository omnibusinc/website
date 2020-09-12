import { createStore } from 'easy-peasy';
import Home from './home/home.model';

const seed = {
    Home,
}

const store = createStore(seed);

export default store;