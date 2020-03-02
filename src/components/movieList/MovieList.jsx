import React from "react";
import { Link, withRouter } from "react-router-dom";
import showMovie from "../showMovie/ShowMovie.component";
const MovieList = ({ movies }) => {
  console.log(movies);

  const styleDiv = {
    display: "flex",
    flexWrap: "wrap"
  };

  return (
    <div style={styleDiv}>
      {movies
        ? movies.results.map(movie => {
            return (
              <div style={{ marginLeft: "2rem" }}>
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`}
                    alt=""
                  />
                </div>
                <Link
                  to={{
                    pathname: "/show-movie",
                    state: { data: movie }
                  }}
                >
                  {movie.title}
                </Link>
              </div>
            );
          })
        : null}
    </div>
    //
  );
};

export default withRouter(MovieList);
