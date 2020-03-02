import React from "react";
import Suggestion from "../Suggestion/Suggestion";

const Suggestions = ({ items }) => {
  return (
    <div>
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
