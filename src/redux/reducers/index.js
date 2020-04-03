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

const movieSliderReducer = (movieSlider = null, action) => {
  if (action.type === "FETCH_MOVIE_SLIDER") {
    return action.payload;
  }
  return movieSlider;
};

const newestMoviesReducer = (popularToday = null, action) => {
  if (action.type === "FETCH_NEWEST_MOVIES") {
    return action.payload;
  }
  return popularToday;
};
const highestRatedReducer = (highestRated = null, action) => {
  if (action.type === "FETCH_HIGHEST_RATED_MOVIES") {
    return action.payload;
  }
  return highestRated;
};

const isSendingReducer = (sending = false, action) => {
  if (action.type === "IS_SENDING") {
    return action.payload;
  }
  return sending;
};

const optionActiveReducer = (active = "1", action) => {
  if (action.type === "OPTION_ACTIVE") {
    return action.payload;
  }
  return active;
};

const currentPageReducer = (page = 1, action) => {
  if (action.type === "CURRENT_PAGE") {
    return action.payload;
  }
  return page;
};

const displayMovieReducer = (movie = null, action) => {
  if (action.type === "DISPLAY_MOVIE") {
    return action.payload;
  }
  return movie;
};
const fetchTrailersReducer = (trailers = null, action) => {
  if (action.type === "FETCH_TRAILERS") {
    return action.payload;
  }
  return trailers;
};

const fetchTorrentsReducer = (torrents = null, action) => {
  if (action.type === "FETCH_TORRENTS") {
    return action.payload;
  }
  return torrents;
};
const fetchSubtitlesReducer = (subtitle = null, action) => {
  if (action.type === "FETCH_SUBTITLES") {
    return action.payload;
  }
  return subtitle;
};

const fetchMagnetsReducer = (magnets = null, action) => {
  if (action.type === "FETCH_MAGNETS") {
    return action.payload;
  }
  return magnets;
};

export default combineReducers({
  fetchMovies: fetchMoviesReducer,
  selectedMovie: selectedMovieReducer,
  movieSuggestions: movieSuggestionsReducer,
  search: searchQueryReducer,
  isSending: isSendingReducer,
  selectedMovieId: selectedMovieIdReducer,
  movieSlider: movieSliderReducer,
  newestMovies: newestMoviesReducer,
  highestRatedMovies: highestRatedReducer,
  optionActive: optionActiveReducer,
  currentPage: currentPageReducer,
  displayMovie: displayMovieReducer,
  trailers: fetchTrailersReducer,
  fetchTorrents: fetchTorrentsReducer,
  fetchSubtitles: fetchSubtitlesReducer,
  fetchMagnets: fetchMagnetsReducer
});
