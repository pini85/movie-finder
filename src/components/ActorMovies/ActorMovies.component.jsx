import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import MovieListSearch from "../MovieListSearch/MovieListSearch";
import { Container } from "./ActorMovies.styles";
const ActorMovies = (actorMovies) => {
  const { name } = useParams();

  return (
    <div>
      <MovieListSearch name={name}></MovieListSearch>
    </div>
  );
};
const mapStateToProps = (state) => ({
  actorMovies: state.fetchActorMovies,
});
export default connect(mapStateToProps)(ActorMovies);
