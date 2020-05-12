import React, { useState, useEffect } from "react";
const useWidth = () => {
  const [width, SetWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      SetWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
};

export default useWidth;
