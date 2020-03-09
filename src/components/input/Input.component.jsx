import React, { useState } from "react";
import { connect } from "react-redux";
import { searchQuery } from "../../redux/actions";

const Input = props => {
  // {
  //   sendRequest,
  //   handleSearchChange,
  //   isDisabled,
  //   value,
  //   props
  // }
  console.log(props);

  const [searchQuery, setSearchQuery] = useState("");
  const styleInput = {
    width: "18rem",
    height: "2.5rem",
    padding: "2rem"
  };
  return (
    <div>
      <input
        style={styleInput}
        value={props.searchQuery(searchQuery)}
        onChange={e => setSearchQuery(e.target.value)}
        type="text"
      />
      {/* <button disabled={isDisabled} onClick={e => sendRequest(e)}>
        Search
      </button> */}
    </div>
  );
};

export default connect(null, {
  searchQuery: () => searchQuery()
})(Input);
