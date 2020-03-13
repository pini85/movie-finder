import { combineReducers } from "redux";

const fetchMoviesReducer = (request = null, action) => {
  if (action.type === "FETCH_MOVIES") {
    return action.payload;
  }
  return request;
};
const selectedMovieIdReducer = (selectedMovieId = null, action) => {
  if (action.type === "MOVIE_ID_SELECTED") {
    return action.payload;
  }
  return selectedMovieId;
};
const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "MOVIE_SELECTED") {
    return action.payload;
  }
  return selectedMovie;
};

// const selectedMoviesReducer = (selectedMovies = false, action) => {
//   if (action.type === "MOVIES_SELECTED") {
//
//     return action.payload;
//   }
//   return selectedMovies;
// };

const movieSuggestionsReducer = (movieSuggestions = false, action) => {
  if (action.type === "MOVIE_SUGGESTIONS") {
    return action.payload;
  }
  return movieSuggestions;
};

const searchQueryReducer = (movieQuery = "", action) => {
  if (action.type === "SEARCH_QUERY") {
    return action.payload;
  }
  return movieQuery;
};

const popularMoviesReducer = (popularMovies = null, action) => {
  if (action.type === "FETCH_POPULAR_MOVIES") {
    return action.payload;
  }
  return popularMovies;
};

const isSendingReducer = (sending = false, action) => {
  if (action.type === "IS_SENDING") {
    return action.payload;
  }
  return sending;
};

export default combineReducers({
  fetchMovies: fetchMoviesReducer,
  selectedMovie: selectedMovieReducer,
  movieSuggestions: movieSuggestionsReducer,
  search: searchQueryReducer,
  isSending: isSendingReducer,
  selectedMovieId: selectedMovieIdReducer,
  popularMovies: popularMoviesReducer
});
