import React from "react";
import { connect } from "react-redux";
import { fetchActors } from "../../redux/actions/index";

import ActorCard from "../ActorCard/ActorCard.component";
import Pagination from "../Pagination/Pagination.component";
import { Container } from "./DisplayPopularActors.styles";
const DisplayPopularActors = (props) => {
  return (
    <>
      <Pagination api={props.fetchActors} data={props.actors} />
      <Container>
        {props.actors &&
          props.actors.map((actor) => {
            return (
              <>
                <ActorCard actor={actor} />
              </>
            );
          })}
      </Container>
    </>
  );
};
export default connect(null, {
  fetchActors: (data, page) => fetchActors(data, page),
})(DisplayPopularActors);
