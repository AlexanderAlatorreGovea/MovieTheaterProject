import movieCofig from "../apis/movieCofig";
import {
  FETCH_NOWPLAYING_MOVIES,
  FETCH_UPCOMING_MOVIES,
  FETCH_POPULAR_MOVIES,
  FETCH_TOP_RATED_MOVIES,
  SEARCH_DATA,
} from "./types";

export const fetchUpcomingMovies = () => async (dispatch) => {
  const response = await movieCofig.get(
    `/upcoming?api_key=745fff882d6434c78ae4843ae559ef06&language=en-US&page=1&append_to_response=videos,details`
  );
  dispatch({ type: FETCH_UPCOMING_MOVIES, payload: response.data.results });
};

export const fetchNowplayingMovies = () => async (dispatch) => {
  const response = await movieCofig.get(
    `/now_playing?api_key=745fff882d6434c78ae4843ae559ef06&language=en-US&page=1`
  );

  dispatch({ type: FETCH_NOWPLAYING_MOVIES, payload: response.data.results });
};

export const fetchPopularMovies = () => async (dispatch) => {
  const response = await movieCofig.get(
    `/popular?api_key=745fff882d6434c78ae4843ae559ef06&language=en-US&page=1`
  );

  dispatch({ type: FETCH_POPULAR_MOVIES, payload: response.data.results });
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  const response = await movieCofig.get(
    `/top_rated?api_key=745fff882d6434c78ae4843ae559ef06&language=en-US&page=1`
  );

  dispatch({ type: FETCH_TOP_RATED_MOVIES, payload: response.data.results });
};

const saveData = (payload) => ({
  type: SEARCH_DATA,
  payload,
});

export const searchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(saveData(data)))
      .catch((error) => console.log(error));
  };
};
