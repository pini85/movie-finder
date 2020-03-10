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
