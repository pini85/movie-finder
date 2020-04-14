import React from "react";
import { connect } from "react-redux";
import { Container, Img } from "./CastSuggestion.styles";
const CastSuggestion = ({
  name,
  image,
  advancedSearchValue,
  advancedSearchSetValue,
}) => {
  return (
    <Container onClick={(e) => advancedSearchSetValue(e.target.innerText)}>
      <div> {name}</div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  castSuggestion: state.castSuggestion,
});
export default connect(mapStateToProps)(CastSuggestion);
