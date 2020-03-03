import React from "react";
import Suggestion from "../Suggestion/Suggestion";

const Suggestions = ({ items }) => {
  const container = {
    position: "absolute",
    background: "var(--primary-color)",
    color: "var(text-between)",
    paddingBottom: "1rem"
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
