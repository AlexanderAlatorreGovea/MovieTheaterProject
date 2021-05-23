import { combineReducers } from "redux";
import nowPlayingMovies from "../reducers/movieReducers/nowPlayingMoviesReducer";
import upcomingMovies from "./movieReducers/upcomingMoviesReducer";
import topRatedMovies from "./movieReducers/topRatedMovieReducer";
import popularMovies from "./movieReducers/popularMovieReducer";
import searchData from "./movieReducers/searchData";

export default combineReducers({
  nowPlayingMovies,
  upcomingMovies,
  topRatedMovies,
  popularMovies,
  searchData,
});
