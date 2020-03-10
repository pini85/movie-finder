import React, { useState } from "react";
import { connect } from "react-redux";
import { search } from "../../redux/actions";

const Input = props => {
  // {
  //   sendRequest,
  //   handleSearchChange,
  //   isDisabled,
  //   value,
  //   props
  // }

  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = e => {
    setSearchQuery(e.target.value);
    props.search(searchQuery);
  };
  const styleInput = {
    width: "18rem",
    height: "2.5rem",
    padding: "2rem"
  };
  console.log(searchQuery);

  return (
    <div>
      <input
        style={styleInput}
        value={searchQuery}
        onChange={handleChange}
        type="text"
      />
      <button disabled={props.isSending} onClick={e => props.sendRequest(e)}>
        Search
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  isSending: state.isSending
});

export default connect(mapStateToProps, {
  search: search
})(Input);
