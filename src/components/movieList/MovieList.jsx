import React from "react";
import { Link, withRouter } from "react-router-dom";
import showMovie from "../showMovie/ShowMovie.component";
const MovieList = ({ movies }) => {
  const styleDiv = {
    display: "flex",
    flexDirection: "column"
  };
  return (
    <div style={styleDiv}>
      {movies.Search
        ? movies.Search.map(movie => {
            return (
              <Link
                to={{
                  pathname: "/show-movie",
                  state: { data: movie }
                }}
              >
                {movie.Title}
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default withRouter(MovieList);
