import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  fetchPopularActors,
  fetchActorMovies,
} from "../../redux/actions/index";

import ActorCard from "../ActorCard/ActorCard.component";
import Pagination from "../Pagination/Pagination.component";
import { Container } from "./DisplayPopularActors.styles";
const DisplayPopularActors = (props) => {
  console.log(props);

  const handleClick = (name) => {
    props.fetchActorMovies(name, 1);
    props.history.push(`/search/${name}/page/1`);
  };
  return (
    <>
      <Pagination
        api={props.fetchPopularActors}
        data={props.fetchPopularActorsData}
      />
      <Container>
        {props.fetchPopularActorsData &&
          props.fetchPopularActorsData.results.map((actor) => {
            return (
              <div key={actor.id}>
                <ActorCard handleClick={handleClick} actor={actor} />
              </div>
            );
          })}
      </Container>
    </>
  );
};
const mapStateToProps = (state) => ({
  fetchPopularActorsData: state.fetchPopularActors,
});
export default compose(
  withRouter,
  connect(mapStateToProps, {
    fetchPopularActors: (page) => fetchPopularActors(page),
    fetchActorMovies: (name, page) => fetchActorMovies(name, page),
  })
)(DisplayPopularActors);
