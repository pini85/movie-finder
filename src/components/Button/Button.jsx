import React from "react";
import { motion } from "framer-motion";

const Button = ({ title }) => {
  const styleButton = {
    padding: "1rem 2.5rem",
    backgroundColor: "orangered",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "white"
  };
  return (
    <motion.button
      whileHover={{
        transform: "translateY(-0.3rem)",
        boxShadow: "0 1rem 2rem rgba(0, 0, 0, 0.2)"
      }}
      transition={{ duration: 0.3 }}
      style={styleButton}
    >
      {title}
    </motion.button>
  );
};

export default Button;
