import { tmdbQueryApi, tmdbApi, tmdbIdApi } from "../../apis/tmdbApi";
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

export const fetchPopularMovies = () => async dispatch => {
  const popularMoviesData = [];
  const data = await tmdbApi();

  Promise.all(
    data.map(async item => {
      const data = await tmdbIdApi(item.id);

      popularMoviesData.push(data);
    })
  );
  setTimeout(() => {
    dispatch({ type: "FETCH_POPULAR_MOVIES", payload: popularMoviesData });
  }, 1000);
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
