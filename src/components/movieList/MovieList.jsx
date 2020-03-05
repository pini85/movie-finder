import React from "react";
import { connect } from "react-redux";

import Card from "../card/Card";
const MovieList = props => {
  console.log(props);

  const styleDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "var(--background-color)"
  };

  return (
    <div style={styleDiv}>
      {props.selectedMovies
        ? props.selectedMovies.results.map(movie => {
            return <Card movie={movie}></Card>;
          })
        : null}
    </div>
    //
  );
};
const mapStateToProps = state => ({
  selectedMovies: state.selectedMovies
});
export default connect(mapStateToProps)(MovieList);
