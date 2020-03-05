export const selectedMovie = movie => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie
  };
};
export const selectedMovies = movies => {
  return {
    type: "MOVIE_SELECTED",
    payload: movies
  };
};
