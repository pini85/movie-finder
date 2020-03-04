import React from "react";

const Input = ({ sendRequest, handleSearchChange, isDisabled, value }) => {
  const styleInput = {
    width: "18rem",
    height: "2.5rem",
    padding: "2rem"
  };
  return (
    <div>
      <input
        style={styleInput}
        value={value}
        onChange={e => handleSearchChange(e.target.value)}
        // onKeyPress={sendRequest}
        type="text"
      />
      <button disabled={isDisabled} onClick={e => sendRequest(e)}>
        Search
      </button>
    </div>
  );
};

export default Input;
