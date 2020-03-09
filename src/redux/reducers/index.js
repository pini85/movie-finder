import { combineReducers } from "redux";

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") {
    return action.payload;
  }
  return selectedMovie;
};
const selectedMoviesReducer = (selectedMovies = null, action) => {
  if (action.type === "MOVIES_SELECTED") {
    return action.payload;
  }
  return selectedMovies;
};

const movieSuggestionsReducer = (movieSuggestions = false, action) => {
  if (action.type === "MOVIE_SUGGESTIONS") {
    return action.payload;
  }
  return movieSuggestions;
};

const searchQueryReducer = (movieQuery = null, action) => {
  if (action.type === "SEARCH_QUERY") {
    return action.payload;
  }
  return movieQuery;
};

export default combineReducers({
  selectedMovie: selectedMovieReducer,
  selectedMovies: selectedMoviesReducer,
  movieSuggestions: movieSuggestionsReducer,
  searchQuery: searchQueryReducer
});
