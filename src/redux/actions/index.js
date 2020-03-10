import { tmdbQueryApi } from "../../apis/tmdbApi";
export const selectedMovie = movie => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
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
    console.log("wtf");

    // state.isSending = true;

    const response = await tmdbQueryApi(state.search);
    // state.search = "";

    // state.isSending = false;
    // <Redirect to="/movie-list" />;

    // // setMovieData(data);
    // state.selectedMovies(response);

    // // setUserSuggestions(false);
    // // setSearchQuery("");
    // state.isSending = false;
    dispatch({ type: "FETCH_MOVIES", payload: response });

    // return {
    //   type: "FETCH_MOVIES",
    //   payload: response
    // };
  }
};

export const search = query => {
  return {
    type: "SEARCH_QUERY",
    payload: query
  };
};
export const isSending = bool => {
  return {
    type: "IS_SENDING",
    payload: bool
  };
};
