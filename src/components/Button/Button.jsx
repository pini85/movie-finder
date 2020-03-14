import React from "react";
import "./button.styles.css";

const Button = props => {
  const styleButton = {
    padding: "1rem 2.5rem",
    backgroundColor: "var(--primary-color)",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white"
  };
  return (
    <button
      disabled={props.disabled}
      onClick={props.handleClick}
      style={styleButton}
    >
      {props.title}
    </button>
  );
};

export default Button;
