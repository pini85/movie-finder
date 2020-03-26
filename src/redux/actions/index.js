import {
  tmdbQueryApi,
  tmdbApiPopular,
  tmdbIdApi,
  tmdbNewestTodayApi,
  tmdbMovieSliderApi,
  tmdbHighestRatedApi
} from "../../apis/tmdbApi";
export const selectedMovie = movie => {
  console.log("selectedMovies Action", movie.title);
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
export const fetchMovies = page => async (dispatch, getState) => {
  const state = getState();
  if (state.search.length > 0) {
    const response = await tmdbQueryApi(page, state.search);

    dispatch({ type: "FETCH_MOVIES", payload: response });
  }
};

export const fetchNewestMovies = page => async (dispatch, getState) => {
  const response = await tmdbNewestTodayApi(page);

  dispatch({ type: "FETCH_NEWEST_MOVIES", payload: response });
};

export const search = query => {
  return {
    type: "SEARCH_QUERY",
    payload: query
  };
};

export const fetchMovieSlider = () => async dispatch => {
  const popularMoviesData = [];

  const data = await tmdbMovieSliderApi();

  for (let i = 0; i < data.length; i++) {
    const x = await tmdbIdApi(data[i].id);
    popularMoviesData.push(x);
  }

  if (popularMoviesData.length === 1) {
    dispatch({ type: "FETCH_MOVIE_SLIDER", payload: popularMoviesData });
  }
};

export const fetchHighestRatedMovies = page => async dispatch => {
  const data = await tmdbHighestRatedApi(page);

  dispatch({ type: "FETCH_HIGHEST_RATED_MOVIES", payload: data });
};
export const optionActive = e => {
  return {
    type: "OPTION_ACTIVE",
    payload: e.target.getAttribute("data-type")
  };
};

// const popularMoviesData = [];
//       const data = await tmdbApi();
//       Promise.all(
//         data.map(async item => {
//           const movies = await tmdbIdApi(item.id);

//           popularMoviesData.push(movies);
//         })
//       );
//       props.popularMovies(popularMoviesData);
//     };

export const isSending = bool => {
  return {
    type: "IS_SENDING",
    payload: bool
  };
};

export const currentPage = page => {
  return {
    type: "CURRENT_PAGE",
    payload: page
  };
};
