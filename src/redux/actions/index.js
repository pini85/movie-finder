import { tmdbQueryApi } from "../../apis/tmdbApi";
export const selectedMovie = movie => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
  };
};
export const selectedMovieId = id => {
  return {
    type: "MOVIE_ID_SELECTED",
    payload: id
  };
};
export const selectedMovies = movies => {
  return {
    type: "MOVIES_SELECTED",
    payload: movies
  };
};
export const movieSuggestions = movies => {
  return {
    type: "MOVIE_SUGGESTIONS",
    payload: movies
  };
};
export const fetchMovies = () => async (dispatch, getState) => {
  const state = getState();
  if (state.search.length > 0) {
    const response = await tmdbQueryApi(state.search);

    dispatch({ type: "FETCH_MOVIES", payload: response });
  }
};

export const search = query => {
  return {
    type: "SEARCH_QUERY",
    payload: query
  };
};

export const popularMovies = movies => {
  return {
    type: "POPULAR_MOVIES",
    payload: movies
  };
};
export const isSending = bool => {
  return {
    type: "IS_SENDING",
    payload: bool
  };
};
