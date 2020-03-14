import React from "react";
import Suggestion from "../Suggestion/Suggestion";
import { connect } from "react-redux";

const Suggestions = props => {
  const container = {
    position: "absolute",
    marginTop: "1.2rem",
    marginLeft: "-8.2rem",
    background: "var(--secondary-color)",
    color: "text-white",
    borderLeft: "1px solid white",
    borderTop: "1px solid white",
    borderRight: "1px solid white",
    zIndex: "10"
  };
  return (
    <div className="hiiiii" style={container}>
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
