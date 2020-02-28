import React from "react";

const Input = ({ sendRequest, handleSearchChange, isDisabled }) => {
  return (
    <div>
      <input onChange={handleSearchChange} type="text" />
      <button disabled={isDisabled} onClick={sendRequest}>
        Search
      </button>
    </div>
  );
};

export default Input;
