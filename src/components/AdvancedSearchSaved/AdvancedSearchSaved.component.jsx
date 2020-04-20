import React from "react";
import { connect } from "react-redux";
import { Container, Title } from "./AdvancedSearchSaved.styles";
import Button from "../Button/Button";

const AdvancedSearchSaved = (savedSearches) => {
  return (
    <Container>
      <Title>Saved Search results</Title>
      {savedSearches.savedSearches.map((search) => {
        return <Button title={search.name}></Button>;
      })}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  savedSearches: state.savedAdvancedSearches,
});
export default connect(mapStateToProps)(AdvancedSearchSaved);
