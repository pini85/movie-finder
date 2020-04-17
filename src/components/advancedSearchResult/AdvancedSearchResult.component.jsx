import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Title,
  Result,
  ResultSpan,
  ButtonContainer,
} from "./AdvancedSearchResult.styles";
import Button from "../Button/Button";

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
  handleClick,
}) => {
  const na = (query) => {
    if (!query) {
      return <ResultSpan>N/A</ResultSpan>;
    }
    return query;
  };

  const cast = (cast) => {};

  return (
    <Container>
      <Title>Search Information</Title>
      <div>
        From Year:<ResultSpan>{na(fromYear)}</ResultSpan>
      </div>
      <div>
        To Year:<ResultSpan>{na(toYear)}</ResultSpan>
      </div>
      <div>
        Minimum Rating:<ResultSpan>{na(rating)}</ResultSpan>
      </div>
      <div>
        Minimum Votes: <ResultSpan>{na(voteCount)}</ResultSpan>
      </div>
      <div>
        Run time: <ResultSpan>{na(runTime)}</ResultSpan>
      </div>
      <div>
        Genres: <ResultSpan>{na(genres)}</ResultSpan>
      </div>
      <div>
        Actors:
        {actors.length > 0 ? (
          actors.map((actor) => <Result>{actor}, </Result>)
        ) : (
          <ResultSpan>N/A</ResultSpan>
        )}
      </div>
      <div>
        Directors:
        {directors.length > 0 ? (
          directors.map((director) => <Result> {director}, </Result>)
        ) : (
          <ResultSpan>N/A</ResultSpan>
        )}
      </div>
      <div>
        Writers:
        {writers.length > 0 ? (
          writers.map((writer) => <Result> {writer}, </Result>)
        ) : (
          <ResultSpan>N/A</ResultSpan>
        )}
      </div>
      <ButtonContainer>
        <Button handleClick={handleClick} title="reset"></Button>
      </ButtonContainer>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  searchResult: state.advancedSearch,
});
export default connect(mapStateToProps)(AdvancedSearchResult);
