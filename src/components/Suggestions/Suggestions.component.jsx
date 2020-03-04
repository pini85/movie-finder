import React from "react";
import Suggestion from "../Suggestion/Suggestion";

const Suggestions = ({ items }) => {
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
      {items
        ? items.results.splice(0, 5).map(suggestion => {
            return (
              <div>
                <Suggestion item={suggestion} />
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Suggestions;
