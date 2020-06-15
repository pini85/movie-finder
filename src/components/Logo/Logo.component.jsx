import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import UseWidth from "../../hooks/useWidth.hooks";
import { Img } from "./Logo.styles";
const Logo = () => {
  const [sequences, setSequences] = useState([]);
  const [secretSequences] = useState([81, 87, 69, 65, 83, 68]);
  const width = UseWidth().width;
  const el = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      setSequences((value) => [...value, e.keyCode]);
      console.log(sequences);
      console.count();

      if (
        sequences.length === 6 &&
        sequences.toString() === secretSequences.toString()
      ) {
        setSequences([]);
      }
      if (sequences.length === 6) {
        setSequences([]);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [sequences]);

  return (
    <Link to="/">
      <div>
        <Img
          width={width}
          src={require("../../assets/images/logo.png")}
          alt=""
        />
      </div>
    </Link>
  );
};
export default Logo;
