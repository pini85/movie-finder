import React, { useState } from "react";
import { connect } from "react-redux";
import { saveAdvancedSearch } from "../../redux/actions";
import Modal from "../Modal/Modal.component";
import Input from "../Input/Input.component";

import {
  Container,
  Title,
  Result,
  ResultSpan,
  ButtonContainer,
  ModalContainer,
  ModalTitleContainer,
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
  saveAdvancedSearch,
}) => {
  const [isSaved, setSaved] = useState(false);
  const [savedName, setSavedName] = useState("");
  console.log(isSaved);

  const na = (query) => {
    if (!query) {
      return <ResultSpan>N/A</ResultSpan>;
    }
    return query;
  };

  const handleSave = () => {
    setSaved(false);
    const obj = {
      name: savedName,
      fromYear,
      toYear,
      rating,
      voteCount,
      runTime,
      genres,
      actors,
      directors,
      writers,
    };
    saveAdvancedSearch(obj);
  };

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
        Genre: <ResultSpan>{na(genres)}</ResultSpan>
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
        <div style={{ margin: "0 2rem" }}></div>
        <Button handleClick={() => setSaved(true)} title="save"></Button>
      </ButtonContainer>
      <Modal isToggled={isSaved} setToggled={setSaved}>
        <ModalContainer>
          <ModalTitleContainer>What would be the name?</ModalTitleContainer>
          <Input
            handleOnChange={(e) => setSavedName(e.target.value)}
            value={savedName}
            placeholder="name"
          ></Input>
          <Button handleClick={handleSave} title="save"></Button>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  searchResult: state.advancedSearch,
});
export default connect(mapStateToProps, {
  saveAdvancedSearch: (obj) => saveAdvancedSearch(obj),
})(AdvancedSearchResult);
