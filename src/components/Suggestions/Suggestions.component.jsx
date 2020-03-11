import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import { connect } from "react-redux";

const Suggestions = props => {
  const container = {
    position: "absolute",
    marginTop: "0.4rem",
    marginLeft: "0.4rem",
    background: "var(--primary-color)",
    color: "var(text-between)",
    zIndex: "10"
  };
  return (
    <div style={container}>
      {props.userSuggestions &&
        props.userSuggestions.results.splice(0, 6).map(suggestion => {
          return (
            <div>
              <Suggestion item={suggestion} />
            </div>
          );
        })}
    </div>
  );
};
const mapStateToProps = state => ({
  userSuggestions: state.movieSuggestions
});
export default connect(mapStateToProps)(Suggestions);
