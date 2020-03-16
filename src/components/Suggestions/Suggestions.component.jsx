import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import { connect } from "react-redux";
import { Container } from "./suggestions.styles";

const Suggestions = props => {
  return (
    <Container>
      {props.userSuggestions &&
        props.userSuggestions.results.splice(0, 6).map(suggestion => {
          return (
            <div>
              <Suggestion item={suggestion} />
            </div>
          );
        })}
    </Container>
  );
};
const mapStateToProps = state => ({
  userSuggestions: state.movieSuggestions
});
export default connect(mapStateToProps)(Suggestions);
