import React from "react";

const Input = ({ sendRequest, handleSearchChange, isDisabled, value }) => {
  const styleInput = {
    width: "18rem",
    height: "2.5rem"
  };
  return (
    <div>
      <input
        style={styleInput}
        value={value}
        onChange={e => handleSearchChange(e.target.value)}
        type="text"
      />
      <button disabled={isDisabled} onClick={sendRequest}>
        Search
      </button>
    </div>
  );
};

export default Input;
