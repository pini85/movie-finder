import React from "react";
import { withRouter } from "react-router-dom";
import Card from "../card/Card";
const MovieList = ({ movies }) => {
  console.log(movies);

  const styleDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  return (
    <div style={styleDiv}>
      {movies
        ? movies.results.map(movie => {
            return <Card movie={movie}></Card>;
          })
        : null}
    </div>
    //
  );
};

export default withRouter(MovieList);
