import React from "react";
import { connect } from "react-redux";

import { Container } from "./AdvancedSearchResult.styles";

const AdvancedSearchResult = ({
  fromYear,
  toYear,
  rating,
  voteCount,
  runTime,
  genres,
  actors,
  directors,
  writers,
}) => {
  const na = (query) => {
    console.log(query.length);

    if (query.length === 0) {
      return "N/A";
    }
    return query;
  };
  return (
    <Container>
      <div>From Year: {na(fromYear)}</div>
      <div>To Year: {na(toYear)}</div>
      <div>Minimum Rating: {na(rating)}</div>
      <div>Minimum Votes: {na(voteCount)}</div>
      <div>Run time: {na(runTime)}</div>
      <div>Genres: {na(genres)}</div>
      <div>
        Actors:
        {na(actors.map((actor) => <span> {actor}, </span>))}
      </div>
      <div>
        Directors: {na(directors.map((director) => <span> {director}, </span>))}
      </div>
      <div>
        Writers: {na(writers.map((writer) => <span> {writer}, </span>))}
      </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  searchResult: state.advancedSearch,
});
export default connect(mapStateToProps)(AdvancedSearchResult);
