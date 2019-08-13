import { combineReducers } from 'redux';
import nowPlayingMovies from '/Users/test/movietheaterprojectmaster/src/reducers/movieReducers/nowPlayingMoviesReducer.js';
import upcomingMovies from './movieReducers/upcomingMoviesReducer';
import topRatedMovies from './movieReducers/topRatedMovieReducer';
import popularMovies from './movieReducers/popularMovieReducer';
import searchData from './movieReducers/searchData';
import getMovieDetails from './movieReducers/getMovieDetails';

export default combineReducers({
    nowPlayingMovies,
    upcomingMovies,
    topRatedMovies,
    popularMovies,
    searchData,
    getMovieDetails
})